const reducer = (state, action) => {
  if (action.type === 'SIGNUP_BEGIN') {
    return { ...state, signUpLoading: true };
  }
  if (action.type === 'USER_CREATION_ERROR') {
    return {
      ...state,
      userError: true,
      signUpLoading: false,
      error: action.payload,
    };
  }
  if (action.type === 'SIGNUP_ERROR') {
    return {
      ...state,
      signUpError: true,
      signUpLoading: false,
      error: action.payload,
    };
  }
  if (action.type === 'SIGNUP_SUCCESS') {
    return {
      ...state,
      signUpLoading: false,
      signUpError: false,
      userData: { ...action.payload },
    };
  }
  if (action.type === 'CLEAR_SIGNUP') {
    return { ...state, clearSignup: true };
  }
  if (action.type === 'SIGNUP_ISSUE_COMPLETE') {
    return {
      ...state,
      noAcct: false,
      signUpError: false,
      error: '',
      clearSignup: false,
    };
  }
  if (action.type === 'LOGIN_BEGIN') {
    return { ...state, loginLoading: true };
  }
  if (action.type === 'LOGIN_ERROR') {
    return {
      ...state,
      loginError: true,
      loginLoading: false,
      clearLogin: false,
      error: action.payload,
    };
  }
  if (action.type === 'NO_ACCT') {
    return {
      ...state,
      noAcct: true,
      loginLoading: false,
      clearLogin: true,
      error: action.payload,
    };
  }
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      loginLoading: false,
      loginError: false,
      clearLogin: false,
      userData: { ...action.payload },
    };
  }
  if (action.type === 'CLEAR_LOGIN') {
    return { ...state, clearLogin: true };
  }

  if (action.type === 'LOGIN_ISSUE_COMPLETE') {
    return {
      ...state,
      noAcct: false,
      loginError: false,
      error: '',
      clearLogin: false,
    };
  }
  if (action.type === 'RELOAD') {
    return { ...state, userData: { ...action.payload } };
  }
  if (action.type === 'USER_ORDERS_SUCCESS') {
    // set delivered orders
    const delOrders = action.payload.filter(
      (order) => order.status === 'Delivered'
    );
    // set processing orders
    const proOrders = action.payload.filter(
      (order) => order.status === 'Processing' || order.status === 'In Transit'
    );

    return {
      ...state,
      userOrders: [...action.payload],
      deliveredOrders: [...delOrders],
      processingOrders: [...proOrders],
    };
  }
  if (action.type === 'PHONE_UPDATE_BEGINS') {
    return {
      ...state,
      phoneUpdateloading: true,
    };
  }
  if (action.type === 'PHONE_UPDATE_SUCCESS') {
    return {
      ...state,
      phoneUpdateloading: false,
      phoneUpdateError: false,
      error: action.payload,
    };
  }
  if (action.type === 'PHONE_UPDATE_ERROR') {
    return {
      ...state,
      phoneUpdateloading: false,
      error: action.payload,
      phoneUpdateError: true,
    };
  }
  if (action.type === 'PAYMENT_BEGINS') {
    return {
      ...state,
      paymentLoading: true,
    };
  }
  if (action.type === 'PAYMENT_SUCCESS') {
    return {
      ...state,
      paymentLoading: false,
      paymentSuccessful: true,
      paymentFailed: false,
      error: 'Payment Successful',
    };
  }
  if (action.type === 'PAYMENT_COMPLETE') {
    return {
      ...state,
      paymentLoading: false,
      paymentSuccessful: false,
    };
  }
  if (action.type === 'PAYMENT_CANCELED') {
    return {
      ...state,
      paymentLoading: false,
    };
  }
  if (action.type === 'SETTINGS_SUCCESS') {
    return {
      ...state,
      settings: { ...action.payload },
    };
  }
  if (action.type === 'TOGGLE_SIDEBAR') {
    if (action.payload === undefined) {
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    }
    if (action.payload === false) {
      return {
        ...state,
        sidebarOpen: action.payload,
      };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
