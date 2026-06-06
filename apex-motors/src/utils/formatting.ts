export const formatPrice = (num: number) => {
  if (!num) return null;
  return new Intl.NumberFormat('en-US').format(num);
};