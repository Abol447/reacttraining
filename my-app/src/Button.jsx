const Button = (props) => {
  return (
    <div className="byn" onClick={props.Handler}>
      {props.txt}
    </div>
  );
};
export default Button;
