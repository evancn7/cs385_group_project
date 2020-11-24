import React, { Component } from "react";

class App extends Component {
  render() {
    // let members = ["Chris Boland", "Pavel", "Cristina Glez", "Evan Campion"];
    return (
      <div className="App">
        <div class="container">
          <div class="app-logo"><h1>Team Nickel</h1></div>
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
          <div class="new-account-container">
            <button>Create New Account</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
