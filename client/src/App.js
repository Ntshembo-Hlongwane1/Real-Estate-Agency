import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar.jsx";
import Banner from "./Components/Banner";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import HouseListing from "./Components/HouseListing";
import HouseOnSale from "./Components/HouseOnSale";
import HouseOnRent from "./Components/HouseOnRent";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/properties/sale">
          <NavBar />
          <HouseOnSale />
        </Route>
        <Route path="/properties/rent">
          <NavBar />
          <HouseOnRent />
        </Route>
        <Route path="/properties/sell">
          <NavBar />
          <HouseListing />
        </Route>
        <Route to="/">
          <NavBar />
          <SearchBar />
          <Banner />
          <MainContent />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
