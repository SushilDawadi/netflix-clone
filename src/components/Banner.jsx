import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/Banner.css";
import requests from "../Request";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
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

  const truncate = (string, n) => {
    //this function will truncate the string after 150 characters
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    // ? checking whether string is undefined or not
    // if string.length is greater than n then return string from 0 to n-1 and add "..." to it otherwise simply return string
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* any of the above will be displayed */}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
