function Button({
  children,
  width = "100px",
  round = "rounded-2xl",
  handeller = "",
  id,
}) {
  const customStyle = `w-[${width}] ${round} bg-gray-700`;
  return (
    <div className={customStyle}>
      <div
        onClick={(e) => handeller(e)}
        id={id}
        className="py-1 px-2 w-full font-bold flex hover:cursor-pointer items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
}
export default Button;
