function Question({ children, qu }) {
  return (
    <div className="flex min-w-[300px] flex-col  gap-1 ">
      <span className="px-1 font-bold  text-xl">{qu}</span>
      {children}
    </div>
  );
}

export default Question;
