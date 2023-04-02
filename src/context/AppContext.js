import React, { useContext, createContext, useReducer } from 'react';
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

const AppContext = createContext();

const initialState = {
  userData: {},
  userOrders: [],
  deliveredOrders: [],
  signUpLoading: false,
  loginLoading: false,
  userId: '',
  userError: false,
  signUpError: false,
  noAcct: false,
  loginError: false,
  error: '',
  phoneUpdateloading: false,
  phoneUpdateError: false,
};

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
        totalOrders: '',
        totalSpent: '',
        totalBags: '',
      };
    } else {
      userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        totalOrders: '',
        totalSpent: '',
        totalBags: '',
      };
    }

    try {
      await setDoc(docRef, userData);
      console.log('User created');
      sessionStorage.setItem('userId', user.uid);
      //toast account created
      getOrders(user.uid);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: { ...userData } });

      navigate('/dashboard/home');
    } catch (error) {
      // toast there was
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

  // <--------------------------------------------User Data Retrieval Section Start---------------------------------------------------------->
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

  // gets orders in a users store
  const userOrders = [];
  const getOrders = async (userId) => {
    // const userId = sessionStorage?.getItem('userId');
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

  // !!!!!!!!!!!!!!!!!!!!!!!! ALL COMMENTS WITHIN THE FUNCTION BENEATH ARE IMPORTANT AND SHOULD NOT BE DELETED !!!!!!!!!!!!!!!!!!!!!!!!

  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, proceed to set and retrieve the user's data
      const userId = auth.currentUser.uid;
      // sessionStorage.setItem('userId', userId);
      const userDocCollectionRef = collection(db, 'users', userId, 'orders');
      retrieveUser(userId);

      // writes orders to the user
      // setDoc(doc(userDocCollectionRef), {
      //   date: '24/03/2023',
      //   name: 'malikk',
      //   time: '5:34pm',
      //   phone: '08098121022',
      //   amount: '1200',
      //   status: 'Delivered',
      //   'number of bags': 7,
      //   address: '1, Ahmadu Bello Way, ',
      // })
      //   .then(() => {
      //     // Order data saved successfully
      //     console.log('saved');
      //   })
      //   .catch((error) => {
      //     // Error occurred while saving order data
      //     console.log('error');
      //   });
    }
  });
  // <--------------------------------------------User Data Retrieval Section End---------------------------------------------------------->

  // <--------------------------------------------User Data Phone Number Change Start ---------------------------------------------------------->
  const updatePhone = async (phn) => {
    dispatch({ type: 'PHONE_UPDATE_BEGINS' });
    const userId = auth.currentUser.uid;
    const docRef = doc(db, 'users', userId);
    try {
      const updated = await setDoc(docRef, {
        ...state.userData,
        phone: phn,
      });
      dispatch({ type: 'PHONE_UPDATE_SUCCESS', payload: 'Success' });
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
  // <--------------------------------------------User Data Phone Number Change End ---------------------------------------------------------->

  return (
    <AppContext.Provider
      value={{
        updatePhone,
        handleEmailSignUp,
        handleGoogleSignUp,
        handleLogout,
        handleEmailLogin,
        handleGoogleLogin,
        ...state,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
