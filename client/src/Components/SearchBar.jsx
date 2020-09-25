import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../StyleSheet/SearchBar.css";

import { useHistory } from "react-router-dom";

const DesktopSearchBar = () => {
  const history = useHistory();
  const [search, setSearchQuery] = useState("");
  const redirectToFilterSearchResult = (location) => {
    history.push(`/search/results-location/${location}`);
  };

  const searchBoxResults = () => {
    history.push(`/house/search/${search}`);
  };
  return (
    <div className="Search__container">
      <div className="Search__text">
        <h4>Find Your Ideal Home</h4>
      </div>
      <div className="Search__field">
        <input
          type="text"
          placeholder="Province search supported"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon onClick={searchBoxResults} />
      </div>
      <div className="filters">
        Filter By Province:
        <select onChange={(e) => redirectToFilterSearchResult(e.target.value)}>
          <option>...</option>
          <option>Limpopo</option>
          <option>Western Cape</option>
          <option>Eastern Cape</option>
          <option>Mpumalanga</option>
          <option>Northern Cape</option>
          <option>Johannesburg</option>
          <option>Pretoria</option>
          <option>Port Elizabeth</option>
        </select>
      </div>
    </div>
  );
};

export default DesktopSearchBar;
