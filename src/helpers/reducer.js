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
    return { ...state, signUpLoading: false, userData: { ...action.payload } };
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
    return { ...state, loginLoading: false, userData: { ...action.payload } };
  }
  if (action.type === 'RELOAD') {
    return { ...state, userData: { ...action.payload } };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
