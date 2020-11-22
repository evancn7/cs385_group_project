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
      </nav>
      </div>
    );
  }
}
export default NavBar;
