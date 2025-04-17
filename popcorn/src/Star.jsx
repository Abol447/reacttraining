import StarSvg from "./StarSvg";

function Star({ starHandeller, movieStar, fill }) {
  return (
    <div className="flex">
      {[...Array(10)].map((_, index) => (
        <StarSvg
          starHandeller={starHandeller}
          id={index}
          fillHandeller={fill}
          key={index}
          fill={movieStar > index ? true : false}
        />
      ))}
    </div>
  );
}

export default Star;
