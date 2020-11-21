import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <div class="register-container">
        <h3>Register</h3>
        <form action="action_page.php" method="post">
          <div class="form-container">
            <div class="user-input-container">
              <label for="fname"><b>Name</b></label>
              <input type="text" placeholder="Enter Name" name="name" required></input>
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required></input>
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>
              <label for="psw"><b> Confirm Password</b></label>
              <input type="password" placeholder="Reenter Password" name="cpsw" required></input>
            </div>
            <div class="register-button-container">
              <div id="register-button">
                <button type="submit">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default RegisterForm;
