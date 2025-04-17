// import { useState } from "react";
import { useState } from "react";

import Rapper from "./Rapper.jsx";
import Button from "./Button.jsx";
import "./App.css";

const titrCollection = ["step1", "step2", "step3"];
const Titr = function (props) {
  return <h3>{props.txt}</h3>;
};
function App() {
  // const [count, setCount] = useState(0);

  // const addHandler = () => {
  //   setCount((count) => count + 1);
  // };
  const [count, setCount] = useState(1);
  const addHandler = () => {
    count < 3 ? setCount(count + 1) : setCount(count);
  };
  const downHandeler = () => {
    count > 1 ? setCount(count - 1) : setCount(count);
  };
  return (
    <div className="main">
      <Rapper style={count} />
      <Titr txt={titrCollection[count - 1]} />
      <div className="btn-rapper">
        <Button txt="previous" Handler={downHandeler} />
        <Button txt="next" Handler={addHandler} />
      </div>
    </div>
  );
}

export default App;
