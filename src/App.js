import React, { Component } from "react";
import myFirebase from './myFirebaseConfig';
// import components
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import Logout from './components/Logout';
// import stylesheets
import "./css/App.css";
import "./css/NavBar.css";


class App extends Component {
  constructor(props) {
    super(props);
    // set two state variable to handle user current page and sidebar toggle
    this.state = {
      currentPageSelection: "Home",
      sidebar: false
    };

    this.setSideBar = this.setSideBar.bind(this);
    this.AboutPageClick = this.AboutPageClick.bind(this);
    this.homeButtonClick = this.homeButtonClick.bind(this);
  }
  // function that toggles true/false on state to animate sliding sidebar
  setSideBar() {
    this.setState({ sidebar : !this.state.sidebar });
  }
  // update state to display HomePage, hide side bar on button click
  homeButtonClick() {
    this.setState({ currentPageSelection: "Home" });
    this.setSideBar();
  }
  // update state to display AboutPage, hide side bar on button click
  AboutPageClick() {
    this.setState({ currentPageSelection: "About" });
    this.setSideBar();
  }
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <nav id="bar">
            <div className="burger" onClick={this.setSideBar}>
              {/* animate burger on click by change of class depending on state */}
              <div className={this.state.sidebar ? "top-active" : "top"}></div>
              <div className={this.state.sidebar ? "bottom-active" : "bottom"}></div>
            </div>
            {/*}<div className="page-title">
              <h3>{this.state.currentPageSelection}</h3>
            </div>*/}
            {/* ? operator used to toggle the sliding sidebar, depending on state class changed */}
            <ul className={this.state.sidebar ? "nav-links-active" : "nav-links"}>
              <li className={this.state.currentPageSelection === "Home" ? "active" : ""} onClick={this.homeButtonClick}>Home</li>
              <li className={this.state.currentPageSelection === "About" ? "active" : ""} onClick={this.AboutPageClick}>About</li>
            </ul>
            <Logout />
          </nav>
        </div>

        {/* conditional rendering based on state, button handler functions change state and change view */}
        {this.state.currentPageSelection === "Home" && <HomePage />}
        {this.state.currentPageSelection === "About" && <AboutPage />}

        {/*<footer><span>Team Nickel</span><span>CS385</span></footer>*/}
      </div>
    );
  }
}
export default App;
