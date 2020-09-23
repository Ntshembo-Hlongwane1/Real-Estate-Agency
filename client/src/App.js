import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar.jsx";
import Banner from "./Components/Banner";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <NavBar />
          <SearchBar />
          <Banner />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
