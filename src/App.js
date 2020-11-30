import React, { Component } from "react";
// import components
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import BasketPage from "./BasketPage";
import StatisticsPage from "./StatisticsPage";
import "./css/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">

        <LandingPage/>

      </div>
    );
  }
}
export default App;
