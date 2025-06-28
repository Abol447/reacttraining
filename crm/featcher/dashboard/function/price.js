export function getTotalPrice(data) {
  return data.reduce((pre, current) => {
    return pre + current.totalPrice;
  }, 0);
}
