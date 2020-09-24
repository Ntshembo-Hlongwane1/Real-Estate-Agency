import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import screenLoader from "../images/screenLoad.gif";
import rentHouseAction from "../store/Actions/rentHouseActions";
import "../StyleSheet/HouseListed.css";
import { Link } from "react-router-dom";
const HouseOnSale = () => {
  const { loading, error, rentHouses } = useSelector(
    (state) => state.rentHouses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rentHouseAction());
  }, []);
  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="Container">
          <h3>Houses To Rent</h3>
          <div className="listedHouses">
            {rentHouses.map((house) => {
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
