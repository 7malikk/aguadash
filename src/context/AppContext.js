import React, { useContext, createContext, useReducer, useEffect } from 'react';
import { auth, db, googleProvider } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import reducer from '../helpers/reducer';
import PaystackPop from '@paystack/inline-js';
import { initialState } from '../helpers/helperFunctions';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  // <--------------------------------------------User Authentication Section Start------------------------------------------------------------>

  //  this function stores user data in database
  const storeUserData = async (user, providerId = false, data) => {
    const docRef = doc(db, 'users', user.uid);
    let userData;
    if (providerId) {
      userData = {
        name: user.displayName,
        email: user.email,
        phone: '',
        totalOrders: 0,
        totalSpent: 0,
        totalBags: 0,
      };
    } else {
      userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        totalOrders: 0,
        totalSpent: 0,
        totalBags: 0,
      };
    }

    try {
      await setDoc(docRef, userData);
      console.log('User created');
      sessionStorage.setItem('userId', user.uid);
      getOrders(user.uid);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: { ...userData } });

      navigate('/dashboard/home');
      dispatch({ type: 'CLEAR_SIGNUP' });
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'USER_CREATION_ERROR', payload: errorMessage });
    }
  };

  // Sign up with email and password
  const handleEmailSignUp = async (data) => {
    dispatch({ type: 'SIGNUP_BEGIN' });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential?.user;
      storeUserData(user, false, data);
    } catch (error) {
      // toast an error
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'SIGNUP_ERROR', payload: errorMessage });
    }
  };

  // Sign up with google
  const handleGoogleSignUp = async () => {
    dispatch({ type: 'SIGNUP_BEGIN' });
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const user = userCredentials?.user;
      const { providerData } = user;
      const providerId = providerData[0].providerId;
      storeUserData(user, providerId);
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'SIGNUP_ERROR', payload: errorMessage });
    }
  };

  // sign in with email and password
  const handleEmailLogin = async (data) => {
    dispatch({ type: 'LOGIN_BEGIN' });
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        dispatch({ type: 'LOGIN_SUCCESS', payload: { ...userData } });
        getOrders(user.uid);
        sessionStorage.setItem('userId', user.uid);

        navigate('/dashboard/home');
        dispatch({ type: 'CLEAR_LOGIN' });
      } else {
        dispatch({ type: 'NO_ACCT', payload: 'Account does not exist' });
      }
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
    }
  };

  // sign in with google
  const handleGoogleLogin = async () => {
    dispatch({ type: 'LOGIN_BEGIN' });
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const user = userCredentials?.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        dispatch({ type: 'LOGIN_SUCCESS', payload: { ...userData } });
        getOrders(user.uid);
        sessionStorage.setItem('userId', user.uid);

        navigate('/dashboard/home');
      } else {
        // No such document
        console.log('no such doc');
        dispatch({ type: 'NO_ACCT', payload: 'Account does not exist' });
      }
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
    }
  };

  // this function logsout the user
  const handleLogout = () => {
    navigate('/');
    signOut(auth);
    sessionStorage.clear();
  };

  // <--------------------------------------------User Authentication Section End------------------------------------------------------------>

  // <--------------------------------------------User Data and Settings Retrieval Section Start---------------------------------------------------------->

  // this handles a scenario where the user reloads the app
  const retrieveUser = async (userId) => {
    if (userId) {
      const userDocRef = doc(db, 'users', userId);
      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          getOrders(userId);
          dispatch({ type: 'RELOAD', payload: { ...userData } });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const retrieveSettings = async () => {
    const userDocRef = doc(db, 'admin', 'settings');
    try {
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const settings = userDoc.data();
        dispatch({ type: 'SETTINGS_SUCCESS', payload: { ...settings } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // gets orders in a users store
  const userOrders = [];
  const getOrders = async (userId) => {
    retrieveSettings();
    const userDocCollectionRef = collection(db, 'users', userId, 'orders');
    try {
      const snapShot = await getDocs(userDocCollectionRef);
      snapShot.forEach((doc) => {
        const orderData = doc.data();
        userOrders.push(orderData);
      });
      dispatch({ type: 'USER_ORDERS_SUCCESS', payload: [...userOrders] });
    } catch (error) {
      console.log(error);
    }
  };

  const userId = sessionStorage.getItem('userId');
  useEffect(() => {
    if (userId) {
      retrieveUser(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // <--------------------------------------------User Data Retrieval Section End---------------------------------------------------------->

  // <--------------------------------------------User Data Update Start ---------------------------------------------------------->
  const updatePhone = async (phn) => {
    dispatch({ type: 'PHONE_UPDATE_BEGINS' });
    const userId = auth.currentUser.uid;
    const docRef = doc(db, 'users', userId);
    try {
      await setDoc(docRef, {
        ...state.userData,
        phone: phn,
      });
      dispatch({ type: 'PHONE_UPDATE_SUCCESS', payload: 'Success' });
      await retrieveUser(userId);
    } catch (error) {
      const str = error.message;
      const regx = /[/!@#$%^&*)(+=._-]+/g;
      const convertErrMsg = str
        .replace('Firebase: Error (auth/', '')
        .replace(regx, ' ');
      const errorMessage =
        convertErrMsg.charAt(0).toUpperCase() + convertErrMsg.slice(1);
      dispatch({ type: 'PHONE_UPDATE_ERROR', payload: errorMessage });
    }
  };

  const updateUserData = async (newOrder) => {
    const userId = auth.currentUser.uid;
    const docRef = doc(db, 'users', userId);
    const newTotalBags = state.userData.totalBags
      ? state.userData.totalBags + Number(newOrder['number of bags'])
      : Number(newOrder['number of bags']);
    const newTotalOrders = state.userData.totalOrders
      ? state.userData.totalOrders + 1
      : 1;
    const newTotalSpent = state.userData.totalSpent
      ? state.userData.totalSpent + Number(newOrder.amount)
      : Number(newOrder.amount);
    try {
      await setDoc(docRef, {
        ...state.userData,
        totalBags: newTotalBags,
        totalOrders: newTotalOrders,
        totalSpent: newTotalSpent,
      });
      await retrieveUser(userId);
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
  // <--------------------------------------------User Data Update End ---------------------------------------------------------->

  // <--------------------------------------------Order Payment and Update User Orders Alongside Admin Orders Start ---------------------------------------------------------->

  // writes orders to the user
  const updateUserOrders = async (userOrder) => {
    const userId = auth.currentUser.uid;
    const userDocRef = doc(db, 'users', userId, 'orders', userOrder.id);

    try {
      await setDoc(userDocRef, {
        ...userOrder,
        amount: userOrder['number of bags'] * Number(state.settings.rate),
      });
      await updateUserData({
        ...userOrder,
        amount: userOrder['number of bags'] * Number(state.settings.rate),
      });
      dispatch({
        type: 'PAYMENT_SUCCESS',
        payload: 'Success',
      });
    } catch (error) {
      console.log('error');
    }
  };

  const updateAllOrders = async (userOrder) => {
    const docRef = doc(db, 'admin', 'Orders', 'allOrders', userOrder.id);
    try {
      await setDoc(docRef, {
        ...userOrder,
        amount: userOrder['number of bags'] * Number(state.settings.rate),
      });
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

  const handlePayment = (order) => {
    dispatch({ type: 'PAYMENT_BEGINS' });
    const uniqueId = new Date().getTime().toString();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      amount: order['number of bags'] * Number(state.settings.rate) * 100,
      email: auth.currentUser.email,
      onSuccess() {
        const userOrder = {
          ...order,
          phone: state.userData.phone,
          name: state.userData.name,
          userId: auth.currentUser.uid,
          email: state.userData.email,
          status: 'Processing',
          id: uniqueId,
        };
        updateUserOrders(userOrder);
        updateAllOrders(userOrder);
      },
      onCancel() {
        dispatch({ type: 'PAYMENT_CANCELED' });
      },
    });
  };
  // <--------------------------------------------Order Payment and Update User Orders Alongside Admin Orders End ---------------------------------------------------------->

  return (
    <AppContext.Provider
      value={{
        handlePayment,
        updatePhone,
        handleEmailSignUp,
        handleGoogleSignUp,
        handleLogout,
        handleEmailLogin,
        handleGoogleLogin,
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
