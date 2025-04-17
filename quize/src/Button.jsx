function Button({ text, click }) {
  return (
    <div
      onClick={click}
      className="border-2 w-[100px] text-center px-3 py-1 rounded-2xl bg-gray-500  border-gray-800 shadow  shadow-gray-600"
    >
      {text}
    </div>
  );
}

export default Button;
