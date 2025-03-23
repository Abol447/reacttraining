function Point({ children, number }) {
  return (
    <div className="w-full">
      <div className=" h-4 rounded-2xl w-full bg-gray-100 ">
        <div
          className=" rounded-2xl bg-gray-400 h-full "
          style={{ width: `${(number / 15) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center">{children}</div>
    </div>
  );
}

export default Point;
