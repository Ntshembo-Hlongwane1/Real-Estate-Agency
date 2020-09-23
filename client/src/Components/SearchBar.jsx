import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../StyleSheet/SearchBar.css";
const DesktopSearchBar = () => {
  return (
    <div className="Search__container">
      <div className="Search__text">
        <h4>Find Your Ideal Home</h4>
      </div>
      <div className="Search__field">
        <input type="text" placeholder="Search for city or surbub" />
        <SearchIcon />
      </div>
      <div className="filters">
        Property Type Filter:
        <select>
          <option>House</option>
          <option>Apartment / Flat</option>
          <option>Townhouse</option>
          <option>Farm</option>
        </select>
      </div>
    </div>
  );
};

export default DesktopSearchBar;
