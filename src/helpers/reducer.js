const reducer = (state, action) => {
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
