import React from "react";
import logo from "../../images/agencyLogo.jpg";
import { Link } from "react-router-dom";
import "../../StyleSheet/DesktopNavBar.css";
const DesktopNavBar = () => {
  return (
    <div className="DesktopNav__container">
      <div className="DesktopNav__leftContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="DesktopNav__rightContainer">
        <Link to="/properties/sale" className="links">
          <h4 className="link">For Sale</h4>
        </Link>
        <Link className="links" to="/properties/rent">
          <h4 className="link">To Rent</h4>
        </Link>
        <Link className="links" to="/properties/sell">
          <h4 className="link">Sell Your Property</h4>
        </Link>
        <Link className="links" to="/contact-us">
          <h4 className="link">Contact Us</h4>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavBar;
