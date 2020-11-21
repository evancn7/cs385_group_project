import React, { Component } from "react";
// import components
import AppLogo from "./components/AppLogo";
import LogInForm from "./components/LogInForm";
import NewAccountButton from "./components/NewAccountButton";

class App extends Component {
  render() {
    // let members = ["Chris Boland", "Pavel", "Cristina Glez", "Evan Campion"];
    return (
      <div className="App">

        <AppLogo/>
        <LogInForm/>
        <NewAccountButton/>

      </div>
    );
  }
}
export default App;
