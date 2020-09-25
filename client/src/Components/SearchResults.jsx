import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import screenLoader from "../images/screenLoad.gif";

import "../StyleSheet/HouseListed.css";
import { Link } from "react-router-dom";
import SearchBoxAction from "../store/Actions/SearchboxAction";
const HouseOnSale = () => {
  const { loading, error, searchBoxResults } = useSelector(
    (state) => state.searchBoxResult
  );
  const dispatch = useDispatch();

  const provinces = [
    "Limpopo",
    "Eastern Cape",
    "Western Cape",
    "Mpumalanga",
    "Northern Cape",
    "Pretoria",
    "Johannesburg",
    "Port Elizabeth",
  ];
  const query = window.location.href.split("/")[5];

  useEffect(() => {
    dispatch(SearchBoxAction(query));
  }, [query]);
  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="Container">
          <h3>Search Results</h3>
          <div className="listedHouses">
            {searchBoxResults.map((house) => {
              return (
                <div className="House__details" key={house._id}>
                  <div className="img-conatiner">
                    <Link
                      to={`/house/${house.house_location.province}/${house._id}`}
                    >
                      <img
                        src={house.house_properties.houseImage}
                        alt="House"
                      />
                    </Link>
                  </div>
                  <div className="House__priceAndDetails">
                    <h4 className="House__price">{`R${house.house_properties.housePrice}`}</h4>
                    <h4 className="House__snipDescription">{`${house.house_properties.bedroomNumber} Bedroom house for sale in ${house.house_location.province}`}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseOnSale;
