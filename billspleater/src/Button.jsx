function Button({ id, txt, handeller, w }) {
  return (
    <div style={{ width: w }}>
      <div
        id={id}
        className="bg-yellow-700 font-bold w-full py-1 px-2 text-center rounded-[10px]"
        onClick={(e) => handeller(e)}
      >
        {txt}
      </div>
    </div>
  );
}

export default Button;
