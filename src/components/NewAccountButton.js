import React, { Component } from "react";

class NewAccountButton extends Component {
  render() {
    const onButtonClick = this.props.onNewAccountButtonClick;
    const userState = this.props.userState;
    if (userState){
      return (
        <div class="new-account-container">
          <button onClick={onButtonClick}>Back to Log In</button>
        </div>
      )
    }
    else{
      return (
        <div class="new-account-container">
          <button onClick={onButtonClick}>Create New Account</button>
        </div>
      );
    }
  }
}
export default NewAccountButton;
