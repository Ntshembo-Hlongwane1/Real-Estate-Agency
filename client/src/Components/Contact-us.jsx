import React, { useState } from "react";
import "../StyleSheet/HouseDescription.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    history.push("/");
  };
  const sendMessage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("subject", subject);
    data.append("message", message);

    const dev_url = "http://127.0.0.1:5000/api/contact";
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
    <div className="Contact__agentForm">
      <form className="Contact__AgentForm">
        <h3>Contact Us</h3>
        <label>Email</label>
        <input
          value={email}
          type="email"
          placeholder="Enter your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Subject</label>
        <input
          value={subject}
          type="text"
          placeholder="Enter the subject of message"
          required
          onChange={(e) => setSubject(e.target.value)}
        />
        <br />
        <label>Message</label>
        <textarea
          value={message}
          cols="30"
          rows="5"
          placeholder="Type your message here"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />

        <button onClick={sendMessage} type="submit">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
