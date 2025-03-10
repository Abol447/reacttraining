import MovieInfoTitr from "./movieInfoTitr";
import Rating from "./RatingStar";

function MovieInfo({ movieInfo, starHandeller, fill, movieStar }) {
  return (
    <div className="  ">
      <div className="text-white flex flex-col gap-5 w-[400px] h-[700px] bg-gray-700 ">
        <MovieInfoTitr movieInfo={movieInfo} />
        {movieInfo.star > 0 ? (
          <div className="font-bold text-center mt-5 bg-gray-600 w-[80%] m-auto p-5">
            Yoy rated the movie {movieInfo.star}{" "}
          </div>
        ) : (
          <Rating
            MovieStar={movieInfo.star}
            starHandeller={starHandeller}
            movieStar={movieStar}
            fill={fill}
          />
        )}
        <div className="w-[90%]  mx-auto basis-[50%] text-gray-950 font-semibold">
          {movieInfo.description}
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
