function Button({ txt }) {
  return (
    <div className="border border-gray-950 w-[70%] flex items-center justify-center bg-gray-800 rounded-4xl font-bold text-white py-1">
      ^ {txt}
    </div>
  );
}

export default Button;
