import StarSvg from "./StarSvg";
import Exite from "./Exite";
function TitrInfoList() {
  return (
    <div className=" shadow-black shadow-2xl text-white bg-gray-800 font-bold rounded-2xl pl-5 h-[120px] flex flex-col justify-evenly  w-full pt-5 pb-5">
      <Exite />
      <div>Movies you watched</div>
      <div className=" h-[40%] flex gap-4 items-center    ">
        <div> x Movies</div>
        <div className="flex h-[10px] items-center">
          <StarSvg fill={true} />
          <div>x</div>
        </div>
        <div className="flex items-center">
          <StarSvg fill={true} />
          <div>x</div>
        </div>
        <div>x min</div>
      </div>
    </div>
  );
}

export default TitrInfoList;
