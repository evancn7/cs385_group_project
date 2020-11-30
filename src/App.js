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

        <LandingPage/>

      </div>
    );
  }
}
export default App;
