import React from "react";
import logo from "../../images/agencyLogo.jpg";
import { Link } from "react-router-dom";
const MobileNavBar = () => {
  return (
    <div className="MobileNav__container">
      <Link to="/">
        <img
          src={logo}
          alt="Company-Logo"
          style={{ textAlign: "center", marginTop: "0px" }}
        />
      </Link>
    </div>
  );
};

export default MobileNavBar;
