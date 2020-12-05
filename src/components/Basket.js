import React, { Component } from "react";

class Basket extends Component {
  totalCalories(acc, obj) {
    return acc + obj.cals;
  }
  totalCarbon(acc, obj) {
    return acc + obj.carbon;
  }
  render() {
    const userList = this.props.userList;
    return (
      <div className="Basket">
        <table className="table table-sm table-bordered container-fluid">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Cals</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carbon</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((a) => (
              <tr key={a.foodID}>
                <td>{a.name}</td>
                <td>{a.cals}</td>
                <td>{a.protein}</td>
                <td>{a.fat}</td>
                <td>{a.carbon}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>Total Calories: {userList.reduce(this.totalCalories, 0)}</div>
        
        <div>Total Carbon: {userList.reduce(this.totalCarbon, 0)}</div>

      </div>
    );
  }
}

export default Basket;
