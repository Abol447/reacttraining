import { useState } from "react";
import Item from "./Item";
import SelectionBill from "./SelectionForm";

function Form() {
  const [price, setprice] = useState(0);
  const [value, setvalue] = useState("");
  const [m, setm] = useState(0);
  const [h, seth] = useState(0);
  const pricehandeller = () =>
    setprice(
      ((Number(m) + Number(h)) / 2 / 100) * Number(value) + Number(value)
    );

  return (
    <form onChange={pricehandeller}>
      <Item titr="cdfd" value={value} setvalue={setvalue} />
      <SelectionBill m={m} setm={setm}>
        <h2>your thoght</h2>
      </SelectionBill>
      <SelectionBill m={h} setm={seth}>
        <h2>your friend thoght</h2>
      </SelectionBill>
      <div>{price}</div>
    </form>
  );
}
export default Form;
