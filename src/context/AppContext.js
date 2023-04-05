import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import reducer from '../helpers/reducer';
import { initialState } from '../helpers/helperFunctions';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const retrieveAllOrders = async () => {
    const allOrders = [];
    const userDocCollectionRef = collection(db, 'admin', 'Orders', 'allOrders');
    try {
      const snapShot = await getDocs(userDocCollectionRef);
      snapShot.forEach((doc) => {
        const orderData = doc.data();
        allOrders.push({ ...orderData, id: doc.id });
      });
      dispatch({ type: 'ALL_ORDERS_SUCCESS', payload: [...allOrders] });
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveAllUsers = async () => {
    const users = [];
    const userDocCollectionRef = collection(db, 'users');
    try {
      const snapShot = await getDocs(userDocCollectionRef);
      snapShot.forEach((doc) => {
        const orderData = doc.data();
        users.push(orderData);
      });
      dispatch({ type: 'ALL_USERS_SUCCESS', payload: [...users] });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const admin = sessionStorage.getItem('admin');
  useEffect(() => {
    if (admin) {
      retrieveAllUsers();
      retrieveAllOrders();
      handleRetrieveSettings();
    }
  }, [admin]);

  // Admin Login
  const handleAdminLogin = async (data) => {
    dispatch({ type: 'ADMIN_LOGIN_BEGIN' });
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      sessionStorage.setItem('admin', user.uid);
      // get all orders
      // get all users
      dispatch({ type: 'ADMIN_LOGIN_SUCCESS' });
      navigate('/merchant/home');
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'ADMIN_LOGIN_ERROR', payload: errorMessage });
    }
  };

  const handleAdminLogout = () => {
    navigate('/');
    signOut(auth);
    sessionStorage.clear();
  };

  const handleUpdatedOrder = async (order) => {
    const docRef = doc(db, 'admin', 'Orders', 'allOrders', order.id);
    const userDocRef = doc(db, 'users', order.userId, 'orders', order.id);
    try {
      await setDoc(docRef, {
        ...order,
      });
      await setDoc(userDocRef, {
        ...order,
      });
      retrieveAllOrders();
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      console.log(errorMessage);
    }
  };

  const handleRetrieveSettings = async () => {
    const userDocRef = doc(db, 'admin', 'settings');
    try {
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const settings = userDoc.data();
        dispatch({ type: 'ADMIN_SETTINGS_SUCCESS', payload: { ...settings } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSettingsUpdate = async (settings) => {
    dispatch({ type: 'SETTINGS_UPDATE_BEGINS' });
    const docRef = doc(db, 'admin', 'settings');
    try {
      await setDoc(docRef, {
        ...settings,
      });
      dispatch({ type: 'SETTINGS_UPDATE_SUCCESS', payload: 'Success' });
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'SETTINGS_UPDATE_ERROR', payload: errorMessage });
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleSettingsUpdate,
        handleUpdatedOrder,
        handleAdminLogout,
        handleAdminLogin,
        ...state,
        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
