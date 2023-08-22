import React from "react";
import "../styles/Banner.css";
const Banner = () => {
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
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is the test Description This is the test Description This is the
          test Description This is the test Description This is the test
          Description This is the test Description This is the test Description
          This is the test Description This is the test Description vThis is the
          test Description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
