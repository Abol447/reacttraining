import "./index.css";
const Number = (props) => {
  return (
    <div
      className={`${props.Number <= props.style ? "selectedNmb" : "Number"}`}
    >
      {props.Number}
    </div>
  );
};

export default Number;
