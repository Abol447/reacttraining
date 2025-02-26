const Input = function ({ value, handeller, lable, placeholder, width, type }) {
  let style =
    "border-2 border-yellow-700  rounded-[10px] outline-0 pl-2.5 " + width;
  return (
    <div className="items-center flex justify-between  font-bold">
      <span>{lable}</span>
      <input
        className={style}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handeller(e)}
      />
    </div>
  );
};

export default Input;
