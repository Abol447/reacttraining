import Item from "./Item";
import Exite from "./Exite";
function ListSection({ movie, show, movieInfoHandeller }) {
  return (
    <div className="w-[400px] bg-gray-700 rounded-2xl h-[700px] pt-2 flex flex-col ">
      <Exite />
      {movie.map((item) => (
        <Item
          movie={item}
          show={show}
          key={item.id}
          id={item.id}
          movieInfoHandeller={movieInfoHandeller}
        />
      ))}
    </div>
  );
}

export default ListSection;
