import React, { Component } from "react";
import "../css/AboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <div className="main">
          <div className="logo"><link rel="apple-touch-icon" href="../images/app_logo.png" /></div>
          <div className="header">
            This is team Nickel’s environmental shopping list APP{" "}
          </div>
          <div className="text">
            This APP was made with the future impact of our food consumption
            habits. And our wider impact on the environment.{" "}
          </div>
          <div className="list">
            <ul>
              <li>The Team</li>
            </ul>
            <ul>
              <li>Evan Campion</li>
              <li>Christopher Boland</li>
              <li>Pavel Proshkovich</li>
              <li>Cristina Gonzalez Marrero</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutPage;
