import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import "../style.css";

const Banner = () => {
  const [movie, setMovie]: any = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request: any = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1>{movie?.overview}</h1>
      </div>
    </header>
  );
};

export default Banner;