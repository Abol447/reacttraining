import { useEffect, useState } from "react";

import MovieInfo from "./movieInfo";
import Navbar from "./navbar";
import MovieList from "./MovieList";
import ListSection from "./ListSection";
function App() {
  const [search, setSearch] = useState("");
  const searchHandeller = function (e) {
    setSearch(e.target.value);
  };

  const [movieStar, setMovieStar] = useState(0);

  const fill = function (e) {
    const id = e.target.closest(".block").id;
    setMovieStar(Number(id));
  };
  const film = [
    {
      titr: "titr",
      date: "date",
      deuration: "deuration",
      categori: "categori",
      imdb: "imdb",
      pic: "pic",
      description: "description",
      show: false,
      star: 0,
      list: false,
      id: crypto.randomUUID(),
    },
    {
      titr: "inception",
      date: "date",
      deuration: "deuration",
      categori: "categori",
      imdb: "imdb",
      pic: "pic",
      description: "description",
      show: false,
      star: 0,
      list: false,
      id: crypto.randomUUID(),
    },
  ];

  const [movieInfo, setMovieInfo] = useState([{}]);
  const movieInfoHandeller = function (newInfo) {
    setMovieInfo(newInfo);
    setMovieStar(0);
  };
  const [movie, SetMovie] = useState(film);
  const addMovie = function (item) {
    SetMovie((pre) => [...pre, item]);
  };

  const movieUpdate = function (upd) {
    SetMovie((pre) =>
      pre.map((item) => (item.id === upd.id ? (item = upd) : item))
    );
  };
  const show = function (id) {
    SetMovie((pre) =>
      pre.map((item) => (item.id === id ? { ...item, show: !item.show } : item))
    );
    movie.show === true ? setMovieInfo([]) : "";
  };
  const starHandeller = function (e) {
    const id = e.target.closest(".block").id;
    // setMovieInfo({ ...movieInfo, star: id });
    SetMovie((pre) =>
      pre.map((item) =>
        item.id === movieInfo.id ? { ...item, star: Number(id) } : item
      )
    );
  };
  return (
    <div>
      <div className="font-mono">
        <Navbar search={search} searchHandeller={searchHandeller} />
      </div>
      <div className="flex gap-5">
        <ListSection
          movie={movie}
          show={show}
          movieInfoHandeller={movieInfoHandeller}
        />
        <MovieList />
        <MovieInfo
          movieInfo={movieInfo}
          starHandeller={starHandeller}
          movieStar={movieStar}
          fill={fill}
        />
      </div>
    </div>
  );
}

export default App;
