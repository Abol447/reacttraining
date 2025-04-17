import Number from "./Number.jsx";

const Rapper = (props) => {
  return (
    <div className="rapper">
      <Number Number="1" style={props.style} />
      <Number Number="2" style={props.style} />
      <Number Number="3" style={props.style} />
    </div>
  );
};

export default Rapper;
