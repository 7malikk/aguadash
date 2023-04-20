export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(number);
};

export const initialState = {
  userData: {},
  userOrders: [],
  deliveredOrders: [],
  processingOrders: [],
  settings: {},
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
  paymentLoading: false,
  paymentFailed: false,
  paymentSuccessful: false,
  clearLogin: false,
  clearSignup: false,
  sidebarOpen: false,
};
