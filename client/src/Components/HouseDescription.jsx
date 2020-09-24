import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import houseDescriptionAction from "../store/Actions/HouseDescription";
import screenLoader from "../images/screenLoad.gif";
import HotelIcon from "@material-ui/icons/Hotel";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import BathtubIcon from "@material-ui/icons/Bathtub";
import "../StyleSheet/HouseDescription.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
const HouseDescription = () => {
  const houseID = window.location.href.split("/")[5];
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { loading, error, houseDescription } = useSelector(
    (state) => state.houseDetails
  );

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    history.push("/");
  };
  useEffect(() => {
    dispatch(houseDescriptionAction(houseID));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("subject", subject);
    data.append("message", message);

    const dev_url = "http://127.0.0.1:5000/contact";
    const production_url = "/api/contact";
    axios
      .post(production_url, data)
      .then((response) => {
        console.log(response);
      }, resetForm())
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="House__detailContainer">
      {loading ? (
        <img src={screenLoader} alt="House Details" />
      ) : error ? (
        <h1>SORRY SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="House__details">
          {houseDescription.map((house) => {
            return (
              <div className="House__detail" key={house._id}>
                <img src={house.house_properties.houseImage} alt="House" />
                <div className="info">
                  <h4 className="house__price">{`R${house.house_properties.housePrice}`}</h4>
                  <h4 className="houseBedsAndState">{`${house.house_properties.bedroomNumber} Bedroom house in ${house.house_location.province} for ${house.house_properties.sale_or_rent}`}</h4>
                  <h4 className="house__location">{`House located directly in: ${house.house_location.street}`}</h4>
                  <div className="more__info">
                    <div className="bedRoomCount">
                      <HotelIcon />
                      <h5>{house.house_properties.bedroomNumber}</h5>
                    </div>
                    <div className="showersCount">
                      <BathtubIcon />
                      <h5>{house.house_properties.bathroomNumber}</h5>
                    </div>
                    <div className="parkingSpace">
                      <DriveEtaIcon />
                      <h5>{house.house_properties.garages}</h5>
                    </div>
                  </div>
                </div>
                <div className="House__textDetail">
                  <h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam tempore, ullam nulla architecto dolorem soluta
                    labore esse minus in reiciendis, eius deleniti officia
                    ratione voluptate atque illo ab assumenda odit dolor! Beatae
                    debitis distinctio libero?
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="Contact__agentForm">
        <form className="Contact__AgentForm">
          <h3>Contact Agent</h3>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter the subject of message"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />
          <label>Message</label>
          <textarea
            cols="30"
            rows="5"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />

          <button onClick={sendMessage}>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default HouseDescription;
