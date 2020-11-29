import React, { Component } from "react";
// import components
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
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
