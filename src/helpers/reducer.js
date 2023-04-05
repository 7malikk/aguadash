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
  if (action.type === 'LOGIN_BEGIN') {
    return { ...state, loginLoading: true };
  }
  if (action.type === 'LOGIN_ERROR') {
    return {
      ...state,
      loginError: true,
      loginLoading: false,
      error: action.payload,
    };
  }
  if (action.type === 'NO_ACCT') {
    return {
      ...state,
      noAcct: true,
      loginLoading: false,
      error: action.payload,
    };
  }
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      loginLoading: false,
      loginError: false,
      userData: { ...action.payload },
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
  // Users Actions End

  // Admin Actions Start
  if (action.type === 'ADMIN_LOGIN_BEGIN') {
    return {
      ...state,
      adminLoading: true,
    };
  }
  if (action.type === 'ADMIN_LOGIN_SUCCESS') {
    return {
      ...state,
      adminLoading: false,
      adminError: false,
    };
  }
  if (action.type === 'ADMIN_LOGIN_ERROR') {
    return {
      ...state,
      adminLoading: false,
      adminError: true,
      error: action.payload,
    };
  }
  if (action.type === 'ALL_USERS_SUCCESS') {
    return {
      ...state,
      allUsers: [...action.payload],
    };
  }
  if (action.type === 'ALL_ORDERS_SUCCESS') {
    return {
      ...state,
      allOrders: [...action.payload],
    };
  }
  if (action.type === 'ADMIN_SETTINGS_SUCCESS') {
    return {
      ...state,
      adminSettings: { ...action.payload },
    };
  }
  if (action.type === 'SETTINGS_UPDATE_BEGINS') {
    return {
      ...state,
      adminSettingsLoading: true,
    };
  }
  if (action.type === 'SETTINGS_UPDATE_SUCCESS') {
    return {
      ...state,
      adminSettingsLoading: false,
      adminSettingsError: false,
      error: action.payload,
    };
  }
  if (action.type === 'SETTINGS_UPDATE_ERROR') {
    return {
      ...state,
      adminSettingsLoading: false,
      error: action.payload,
      adminSettingsError: true,
    };
  }
  if (action.type === 'SETTINGS_COMPLETE') {
    return {
      ...state,
      adminSettingsLoading: false,
      error: '',
      adminSettingsError: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
