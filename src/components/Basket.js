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
    const onRemoveClick = this.props.onClick;
    const onClear = this.props.onClear;
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
                <td>
                  <button className="btn btn-danger" onClick={onRemoveClick}>
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {userList.length > 0 && (
          <button
            onClick={onClear}
            type="button"
            classname="btn btn-outline-danger"
          >
            Clear All
          </button>
        )}

        <div>Total Calories: {userList.reduce(this.totalCalories, 0)}</div>
        <div>
          Total Carbon:{" "}
          {userList.length == 0
            ? 0
            : Math.floor(
                userList.reduce(this.totalCarbon, 0) / userList.length
              )}
        </div>
      </div>
    );
  }
}

export default Basket;
