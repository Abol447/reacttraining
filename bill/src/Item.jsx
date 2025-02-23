import { useState } from "react";

function Item(props) {
  const setvalueHandeller = (event) => {
    props.setvalue(
      (x) => (x = event.target.value > 0 ? event.target.value : x)
    );
  };
  return (
    <div className="num">
      <h2>{props.titr}</h2>
      <input
        className="txt"
        type="number"
        value={props.value}
        onChange={(event) => setvalueHandeller(event)}
      />
    </div>
  );
}

export default Item;
