import React from "react";
import logo from "../../images/agencyLogo.jpg";
const MobileNavBar = () => {
  return (
    <div className="MobileNav__container">
      <img
        src={logo}
        alt="Company-Logo"
        style={{ textAlign: "center", marginTop: "0px" }}
      />
    </div>
  );
};

export default MobileNavBar;
