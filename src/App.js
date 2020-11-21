import React, { Component } from "react";
// import components
import AppLogo from "./components/AppLogo";
import LogInForm from "./components/LogInForm";
import RegisterForm from "./components/RegisterForm";
import NewAccountButton from "./components/NewAccountButton";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { newUser : false };
    this.onNewAccountButtonClick = this.onNewAccountButtonClick.bind(this);
  }

  onNewAccountButtonClick(){
    this.setState({ newUser : true })
    console.log("Create Account Button has been clicked!");
  }

  render() {
    if (this.state.newUser){
      return (
        <div className="App" class="container-fluid">

          <AppLogo/>
          <RegisterForm/>
          <NewAccountButton
            onNewAccountButtonClick={this.onNewAccountButtonClick}
          />

        </div>
      );
    }
    else{
      return (
        <div className="App" class="container-fluid">

          <AppLogo/>
          <LogInForm/>
          <NewAccountButton
            onNewAccountButtonClick={this.onNewAccountButtonClick}
          />

        </div>
      )
    }
  }
}
export default App;
