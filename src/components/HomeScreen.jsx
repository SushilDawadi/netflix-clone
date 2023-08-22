import React from "react";
import "../styles/HomeScreen.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      <Banner />

      {/* Row */}
    </div>
  );
};

export default HomeScreen;
