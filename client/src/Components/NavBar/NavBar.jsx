import React, { useEffect, useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:784px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:784px)").matches);
    });
  });
  return <div>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
