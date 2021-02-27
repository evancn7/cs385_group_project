import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import HomePage from "../views/HomePage";
import "../css/Statistics.css";

class StatisticsPage extends Component {
  render() {
    const userList = this.props.userList;
    const totalCalories = this.props.totalCalories;
    const totalCarbon = this.props.totalCarbon;
    const totalQty = this.props.totalQty;
    const carbonResult = Math.floor(userList.reduce(totalCarbon, 0) / userList.reduce(totalQty, 0));
    if (userList.length > 0) {
      return (
        <div className="Statistics">
          <div class="card" class="grey-bg container-fluid">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <h3 class="font-large-2 float-left">
                      <FaIcons.FaBurn />
                      &nbsp;Calories
                    </h3>
                  </div>
                  <div class="media-body text-right">
                    <h3>{userList.reduce(totalCalories, 0)}</h3>
                    <span>kCal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card" class="grey-bg container-fluid">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <h3 class="font-large-2 float-left">
                      <FaIcons.FaRecycle />
                      &nbsp;Carbon Rating
                    </h3>
                  </div>
                  <div class="media-body text-right">
                  {carbonResult >= 8 && <h3>High</h3>}
                  {(carbonResult > 4 && carbonResult < 8) && <h3>Medium</h3>}
                  {carbonResult <= 4 && <h3>Low</h3>}
                    <span>Carbon Emissions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card" class="grey-bg container-fluid">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <h3 class="font-large-2 float-left">
                      <FaIcons.FaRunning />
                      &nbsp;Run
                    </h3>
                  </div>
                  <div class="media-body text-right">
                    <h3>
                      {(userList.reduce(totalCalories, 0) / 110).toFixed(2)}
                    </h3>
                    <span>Kilometres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card" class="grey-bg container-fluid">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <h3 class="font-large-2 float-left">
                      <FaIcons.FaBicycle />
                      &nbsp;Cycle
                    </h3>
                  </div>
                  <div class="media-body text-right">
                    <h3>
                      {(userList.reduce(totalCalories, 0) / 30).toFixed(2)}
                    </h3>
                    <span>Kilometres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="Statistics"></div>;
    }
  }
}
export default StatisticsPage;
