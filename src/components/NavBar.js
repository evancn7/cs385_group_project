import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div class="NavBar">
      <nav id='bar'>
        <div class='burger'>
          <div id='top'></div>
          <div id='bottom'></div>
        </div>
        <div>
        Team Nickel
        </div>
        <ul class='nav-links'>
          <li>Home</li>
          <li>Basket</li>
          <li>Statistics</li>
        </ul>
      </nav>
      </div>
    );
  }
}
export default NavBar;
