import React, { Component } from "react";
// import components
import AppLogo from "./components/AppLogo";
import LogInForm from "./components/LogInForm";
import NewAccountButton from "./components/NewAccountButton";

let newUser = false; // boolean flag to conditionally render LogIn/Register form

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.onNewAccountButtonClick = this.onNewAccountButtonClick.bind(this);
  }

  onNewAccountButtonClick(){
    newUser = true;
    console.log("Create Account Button has been clicked!");
  }

  render() {
    return (
      <div className="App" class="container-fluid">

        <AppLogo/>
        <LogInForm/>
        <NewAccountButton
          onNewAccountButtonClick={this.onNewAccountButtonClick}
        />

      </div>
    );
  }
}
export default App;
