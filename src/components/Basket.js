import React, { Component } from "react";

class Basket extends Component {
  render() {
    const userList = this.props.userList;
    const onRemoveClick = this.props.onClick;
    const onClear = this.props.onClear;
    const totalCalories = this.props.totalCalories;
    const totalCarbon = this.props.totalCarbon;
    const totalQty = this.props.totalQty;
    return (
      <div className="Basket">
      {/* only render when the basket actually has something to clear */}
        {userList.length > 0 && (
          <button
            onClick={onClear}
            type="button"
            classname="btn btn-outline-danger"
          >
            Clear All
          </button>
        )}
        <table className="table table-sm table-bordered container-fluid">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Cals</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carbon</th>
              <th>Qty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {/* each object is rendered from array and those affected by
            quantity are rendered as such */}
            {userList.map((a) => (        
              <tr key={a.foodID}>
                <td>{a.name}</td>
                <td>{a.cals * a.qty}</td>
                <td>{(a.protein * a.qty).toFixed(1)}</td>
                <td>{(a.fat * a.qty).toFixed(1)}</td>
                <td>{a.carbon}</td>
                <td>{a.qty}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onRemoveClick(a.foodID)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Basket;
