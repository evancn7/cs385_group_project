import React, { Component } from "react";

class NewAccountButton extends Component {
  render() {
    const onButtonClick = this.props.onNewAccountButtonClick;
    return (
      <div class="new-account-container">
        <button onClick={onButtonClick}>Create New Account</button>
      </div>
    );
  }
}
export default NewAccountButton;
