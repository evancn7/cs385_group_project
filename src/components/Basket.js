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
        <div className="basket-header">
          {userList.length > 0 && <h3>Basket</h3>}
        </div>
        <table className="table table-sm table-bordered">
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
        {userList.length > 0 && (
          <button
            onClick={onClear}
            type="button"
            className="btn btn-outline-danger"
          >
            Clear Basket
          </button>
        )}
      </div>
    );
  }
}

export default Basket;
