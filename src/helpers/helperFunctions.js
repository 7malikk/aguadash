export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(number);
};

export const initialState = {
  allOrders: [],
  allUsers: [],
  adminSettings: {},
  adminLoading: false,
  adminSuccess: false,
  adminError: false,
  adminSettingsLoading: false,
  adminSettingsError: false,
  sidebarOpen: false,
};
