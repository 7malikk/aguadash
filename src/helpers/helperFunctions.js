export const formatPrice = (number) => {
  const convert = Number(number);
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(convert);
};
