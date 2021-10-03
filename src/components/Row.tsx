import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

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
    <div className="w-full">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie: any) => (
          <img
            className="w-20"
            src={`${url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
