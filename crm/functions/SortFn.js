export function SortAlphabet(data, value) {
  return [...data].sort((a, b) => {
    const aVal = a[value]?.toString() || "";
    const bVal = b[value]?.toString() || "";
    return aVal.localeCompare(bVal);
  });
}
export function SortAscending(data, value) {
  return data.sort((a, b) => a[value] - b[value]);
}
export function SortDescending(data, value) {
  return data.sort((a, b) => b[value] - a[value]);
}
