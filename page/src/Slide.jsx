function Slide({ children }) {
  return (
    <div className="p-5 w-[500px] h-[350px] border-2 border-gray-700 bg-gray-200 flex  flex-col justify-between ">
      {children}
    </div>
  );
}

export default Slide;
