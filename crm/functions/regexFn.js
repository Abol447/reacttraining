export function getNumber(text = "no number") {
  if (text) {
    const match = text.match(/(\d+)\s*days?/i);
    return Number(match[1]);
  } else return null;
}
