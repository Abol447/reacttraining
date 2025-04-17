import StarSvg from "./StarSvg";

function MovieInfoTitr({ movieInfo }) {
  return (
    <div className="w-full  items-center rounded-2xl shadow-black shadow-2xl h-[150px] flex gap-5 bg-gray-800 text-white">
      <div className="w-[30%] h-full]">
        <img src="x" alt="x" className="" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl">{movieInfo.titr}</span>
        <span>
          {movieInfo.date} -{movieInfo.deuration} min
        </span>
        <div className="flex gap-4 ">
          <StarSvg fill />
          <span> {movieInfo.imdb} IMDBrating</span>
        </div>
      </div>
    </div>
  );
}

export default MovieInfoTitr;
