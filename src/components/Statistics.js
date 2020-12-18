import React, { Component } from "react";
import HomePage from "../views/HomePage";

class StatisticsPage extends Component {
  render() {
    const userList = this.props.userList;
    const totalCalories = this.props.totalCalories;
    const totalCarbon = this.props.totalCarbon;
    const totalQty = this.props.totalQty;
    return (
      <div className="StatisticsPage">
        <div class="card" class="grey-bg container-fluid">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <h3 class="font-large-2 float-left">Your Carbon Rating</h3>
                </div>
                <div class="media-body text-right">
                  <h3>{userList.length == 0
                    ? 0
                    : Math.floor(
                        userList.reduce(totalCarbon, 0) / userList.reduce(totalQty, 0)
                      )}</h3>
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
                  <h3 class="font-large-2 float-left">Run</h3>
                </div>
                <div class="media-body text-right">
                  <h3>{(userList.reduce(totalCalories, 0) / 110).toFixed(2)}</h3>
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
                  <h3 class="font-large-2 float-left">Cycle</h3>
                </div>
                <div class="media-body text-right">
                  <h3>{(userList.reduce(totalCalories, 0) / 30).toFixed(2)}</h3>
                  <span>Kilometres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StatisticsPage;
