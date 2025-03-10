function Item({ show, movie, movieInfoHandeller }) {
  return (
    <div
      className="flex gap-2 font-bold items-center border-b-2 p-5 hover:cursor-pointer hover:bg-blue-700"
      onClick={() => {
        show(movie.id);
        movieInfoHandeller(movie);
      }}
    >
      <div className="w-[50px] h-[70px] bg-blue-950 "></div>
      <div>
        <div>{movie.titr}</div>
        <div>{movie.date}</div>
      </div>
    </div>
  );
}

export default Item;
