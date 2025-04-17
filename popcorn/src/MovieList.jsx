import { useState } from "react";

import TitrInfoList from "./TitrInfoList";
import Movie from "./Movie";

function MovieList() {
  return (
    <div className="w-[400px] bg-gray-700 rounded-2xl h-[700px] ">
      <TitrInfoList />
      <div className=" mt-5">
        <Movie />
      </div>
      {/* <div>
        <Star starHandeller={starHandeller} />
      </div> */}
    </div>
  );
}

export default MovieList;
