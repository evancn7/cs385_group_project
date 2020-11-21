import React, { Component } from "react";

class LogInForm extends Component {
  render() {
    return (
      <div class="log-in-container">
        <h3>Log In</h3>
        <form action="action_page.php" method="post">
          <div class="form-container">
            <div class="user-input-container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required></input>
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>
            </div>
            <div class="log-in-button-container">
              <div id="log-in-button">
                <button type="submit">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LogInForm;
