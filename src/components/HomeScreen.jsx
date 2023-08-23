import React from "react";
import "../styles/HomeScreen.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../Request";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow //by default it is true
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreanding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Moives" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Moives" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Moives" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Moives" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
