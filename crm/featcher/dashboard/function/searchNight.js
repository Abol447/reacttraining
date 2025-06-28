export default function searchNight(numnight, data = []) {
  //   return data
  //     ? data.reduce(
  //         (pre, curr) =>
  //           String(data.numnights) === String(numnight) ? pre + 1 : pre,
  //         0
  //       )
  //     : 0;
  let value = 0;

  data.map((item) => {
    if (item.numnights === numnight) value++;
  });
  return value;
}
