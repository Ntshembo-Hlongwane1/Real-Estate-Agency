import React from "react";
import banner from "../images/banner.jpg";
import "../StyleSheet/Banner.css";
const Banner = () => {
  return (
    <div className="Banner__container">
      <img src={banner} alt="Banner" />
    </div>
  );
};

export default Banner;
