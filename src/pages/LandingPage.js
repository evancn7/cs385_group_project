import React, { Component } from "react";
// import components
import AppLogo from "../components/AppLogo";
import LogInForm from "../components/LogInForm";
import RegisterForm from "../components/RegisterForm";
import NewAccountButton from "../components/NewAccountButton";


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { newUser : false };
    this.onNewAccountButtonClick = this.onNewAccountButtonClick.bind(this);
  }

  onNewAccountButtonClick(){
    // toggle newUser, assumed true, switched to false on Create New Account
    if (this.state.newUser){
      this.setState({ newUser : false })
    }
    else{
      this.setState({ newUser : true })
    }
  }

  render() {
    if (this.state.newUser){
      return (
        <div className="LandingPage" class="container-fluid">

          <AppLogo/>
          <RegisterForm/>
          <NewAccountButton
            onNewAccountButtonClick={this.onNewAccountButtonClick}
            userState={this.state.newUser}
          />

        </div>
      );
    }
    else{
      return (
        <div className="LandingPage" class="container-fluid">

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
export default LandingPage;
