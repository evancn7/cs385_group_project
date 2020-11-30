import React, { Component } from "react";
// import components
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import BasketPage from "./BasketPage";
import StatisticsPage from "./StatisticsPage";
import "./css/App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageSelection: "None",
      sidebar: false
    };

    this.setSideBar = this.setSideBar.bind(this);
    this.basketPageClick = this.basketPageClick.bind(this);
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
  basketPageClick() {
    this.setState({ currentPageSelection: "Basket" });
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
              <li className={this.state.currentPageSelection === "Basket" ? "active" : ""} onClick={this.basketPageClick}>Basket</li>
              <li className={this.state.currentPageSelection === "Statistics" ? "active" : ""} onClick={this.statisticsPageClick}>Statistics</li>
            </ul>
          </nav>
        </div>

        <LandingPage/>

      </div>
    );
  }
}
export default App;
