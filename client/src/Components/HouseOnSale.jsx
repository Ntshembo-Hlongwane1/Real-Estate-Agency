import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { houseOnSaleFetch } from "../store/Actions/housesFetch";
import screenLoader from "../images/screenLoad.gif";
import "../StyleSheet/HouseListed.css";

const HouseOnSale = () => {
  const { loading, error, houseOnSale } = useSelector(
    (state) => state.housesOnSale
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseOnSaleFetch());
  }, []);
  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="listedHouses">
          {houseOnSale.map((house) => {
            return (
              <div className="House__details">
                <div className="img-conatiner">
                  <img src={house.house_properties.houseImage} alt="House" />
                </div>
                <div className="House__priceAndDetails">
                  <h4>{`R${house.house_properties.land_size}`}</h4>
                  <h4>{`${house.house_properties.bedroomNumber} Bedroom house for sale in ${house.house_location.province}`}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HouseOnSale;
