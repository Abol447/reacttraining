import StarSvg from "./StarSvg";
function Movie() {
  return (
    <div className="border-b-2 border-gray-500 p-5 text-white font-bold flex items-center gap-4 hover:cursor-pointer hover:bg-blue-700">
      <div className="w-[45px] h-[60px] bg-amber-50"></div>
      <div>
        <div> Titr</div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <StarSvg fill={true} />
            <span>number</span>
          </div>
          <div className="flex items-center">
            <StarSvg fill={true} />
            <span>number</span>
          </div>
          <div>x min</div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
