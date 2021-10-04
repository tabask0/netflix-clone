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

  function truncate(str: any, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner mb-4"
      style={{
        height: "90",
        backgroundSize: "100%",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="bg-white cursor-pointer outline-none text-black font-bold pl-10 pr-10 pt-2 pb-2 rounded hover:opacity-30 mr-4">
            <i className="fas fa-play mr-2 text-xl"></i>
            Play
          </button>
          <button className="banner-button hover:opacity-30">
            <i className="fas fa-info-circle text-lg mr-2"></i>My List
          </button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
};

export default Banner;
