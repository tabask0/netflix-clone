import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import "../style.css";

const url = "https://image.tmdb.org/t/p/original/";

const Row = (props: any) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request: any = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  console.log(movies);

  return (
    <div className="text-white text-3xl">
      <h2 className="ml-20">{props.title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll posters p-4">
        {movies.map((movie: any) => (
          <img
            key={movie.id}
            className={`w-20 row-poster cursor-pointer ${
              props.isLargeRow && "row-poster-large"
            }`}
            src={`${url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
