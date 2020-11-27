import React, { Component } from "react";
// import components
import NavBar from "./components/NavBar";


class StatisticsPage extends Component {
  render() {
    return (
      <div className="App">

        <NavBar/>

        <div class="card" class="grey-bg container-fluid">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <h3 class="font-large-2 float-left">Carbon</h3>
                </div>
                <div class="media-body text-right">
                  <h3>High</h3>
                  <span>Carbon Emissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" class="container-fluid">
          <div class="card-body">
            <h5 class="card-title">Carbon Footprint</h5>
            <h6 class="card-subtitle mb-2 text-muted">What is your Carbon Footprint?</h6>
            <p class="card-text">High</p>
            <a href="#" class="card-link">Full Stats</a>
          </div>
        </div>

      </div>
    );
  }
}

export default StatisticsPage;
