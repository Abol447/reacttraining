import React, { useEffect, useState } from "react";
import CardBtn from "./CardBtn";
import { useSelector } from "react-redux";
import { getCart } from "../cart/CartSlice";
export default function BtnAdd({ children, Add, item, id }) {
  const cart = useSelector(getCart);
  const [num, setNum] = useState(0);

  const search = function () {
    cart.map((item) => {
      if (item.pizzaId === id) {
        console.log(id, item.pizzaId);
        setAdd(() => true);
        setNum(() => item.quantity);
      }
    });
  };
  const [status, setAdd] = useState(false);
  useEffect(() => {
    cart.length > 0 ? search() : null;
  }, [cart]);
  return (
    <div>
      {status ? (
        <div className="flex gap-2">
          <CardBtn num={num} id={id} />
          <div className="btn">Delet</div>
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            setAdd((pre) => !pre);
            Add(item);
          }}
        >
          Add to Cart
        </div>
      )}
    </div>
  );
}
