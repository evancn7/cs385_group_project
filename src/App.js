import React, { Component } from "react";
// import components
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";
import "./css/App.css";
import "./css/NavBar.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageSelection: "Home",
      sidebar: false
    };

    this.setSideBar = this.setSideBar.bind(this);
    this.statisticsPageClick = this.statisticsPageClick.bind(this);
    this.homeButtonClick = this.homeButtonClick.bind(this);
  }
  setSideBar() {
    this.setState({ sidebar : !this.state.sidebar });
  }
  homeButtonClick() {
    this.setState({ currentPageSelection: "Home" });
    this.setSideBar();
  }
  statisticsPageClick() {
    this.setState({ currentPageSelection: "Statistics" });
    this.setSideBar();
  }
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <nav id="bar">
            <div className="burger" onClick={this.setSideBar}>
              <div className={this.state.sidebar ? "top-active" : "top"}></div>
              <div className={this.state.sidebar ? "bottom-active" : "bottom"}></div>
            </div>
            <div className="page-title">
              <h3>{this.state.currentPageSelection}</h3>
            </div>
            <ul className={this.state.sidebar ? "nav-links-active" : "nav-links"}>
              <li className={this.state.currentPageSelection === "Home" ? "active" : ""} onClick={this.homeButtonClick}>Home</li>
              <li className={this.state.currentPageSelection === "Statistics" ? "active" : ""} onClick={this.statisticsPageClick}>Statistics</li>
            </ul>
          </nav>
        </div>

        {this.state.currentPageSelection === "Home" && <HomePage />}
        {this.state.currentPageSelection === "Statistics" && <StatisticsPage />}

        <footer><span>Team Nickel</span><span>CS385</span></footer>
      </div>
    );
  }
}
export default App;
