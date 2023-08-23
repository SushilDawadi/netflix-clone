import React, { useEffect, useState } from "react";
import img from "../assets/logo.png";
import "../styles/Nav.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
    //clean up function -->return to remove event listener
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* only add the nav black if show is true */}
      <div className="nav_contents">
        <img className="nav_logo" src={img} alt="netflix logo" />

        <img
          className="nav_avatar"
          src="https://i.redd.it/ty54wbejild91.jpg"
          alt="avatar-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
