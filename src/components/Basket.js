import React, { Component } from "react";


class Basket extends Component {

  getCalculatedPrice(acc, obj) {
    return acc + obj.price;
  }

  //place sum of functions here

  render() {

    const carbonProps = this.props.CarbonFootPrintArray;
    const caloriesProps = this.props.CaloriesArray;
    const costProps = this.props.CostArray;
    const productProps= this.props.ProductArray;

    // we simply use reduce on all three arrays which have been
    // passed via this.props.
    const totalCost = costProps.reduce((this.getCalculatedPrice, 0.0));

    const totalCarbonfootprint = carbonProps.reduce((accumulator, currentvalue)=>accumulator+currentvalue);

    const totalCalories = caloriesProps.reduce((accumulator, currentvalue)=>accumulator+currentvalue);
    
    //reformat getCalculatedPrice for sum of calories and carbonfootprint

    

    return (
      <div className="alert alert-dark" role="alert">
        <h2>Your Total Basket Cost</h2>
        <p className="lead">TOTAL COST: €{totalCost.toFixed(2)}</p>

        {productProps.length <= 0 && (
            <p className="lead text-justify">
              ORDER INCOMPLETE: You'll need to add a product to start your
              order.
            </p>
          )}

        
        <div className="lead">
        {totalCarbonfootprint>80 && <span> Carbon Footprint: High </span>}
        {totalCarbonfootprint<50 && <span> Carbon Footprint: Medium </span>}
        {totalCarbonfootprint>80 && <span> Carbon Footprint: Low </span>}
        </div>
        
        
        
        {/* /* <ul className="lead">
          {caloriesProps.map((s, index) => (
            <li key={index}>
              : <b>{s.topName}</b>, €
              {(custSizeChoice * s.price).toFixed(2)}
            </li>
          ))}
          </ul> */ }


       

        {productProps.length > 0 &&
          <div className="lead text-justify">All done?
          <button type="button" class="btn btn-warning btn-lg btn-block">Place My Order</button>
      </div>}
      </div>
    );
  } // render
} // class Basket

export default Basket;


