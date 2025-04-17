const currency = ["choose", "EUR", "USD", "CAD", "INR"];

function Slect() {
  return (
    <select>
      {currency.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
}

export default Slect;
