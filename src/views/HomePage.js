import React, { Component } from "react";
// import components
import SearchBox from "../components/SearchBox";
import Basket from "../components/Basket";
import Statistics from "../components/Statistics";
// import stylesheets
import "../css/HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      isFetched: false,
      errorMsg: null,
      searchTerm: "",
      userList: [],
    };
    this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.clearArray = this.clearArray.bind(this);
    this.totalCalories = this.totalCalories.bind(this);
    this.totalCarbon = this.totalCarbon.bind(this);
  }

  async componentDidMount() {
    try {
      const API_URL =
        "https://raw.githubusercontent.com/evancn7/NickelAPI/master/shopData.json";
      const response = await fetch(API_URL);
      const jsonResult = await response.json();

      this.setState({ apiData: jsonResult.shopData });
      this.setState({ isFetched: true });
    } catch (error) {
      this.setState({ isFetched: false });
      this.setState({ errorMsg: error });
    }
  }
  searchFilterFunction(searchTerm) {
    return function (obj) {
      let foodName = obj.name.toLowerCase();
      return searchTerm !== "" && foodName.includes(searchTerm.toLowerCase());
    };
  }
  onSearchBoxChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  onButtonClick() {
    this.setState({ searchTerm: "" });
  }
  findFoodByFoodID(foodID) {
    return function (obj) {
      return obj.foodID === foodID;
    };
  }
  onAddClick(foodID) {
    let foodItem = this.state.apiData.filter(this.findFoodByFoodID(foodID));
    // find the index of the fooditem in the array and store it in variable
    let ind = this.state.userList.findIndex(this.findFoodByFoodID(foodID));
    // if item exists then increment the qty property by one
    if (ind >= 0) {
      console.log(this.state.userList[ind]);
      this.state.userList[ind].qty = this.state.userList[ind].qty + 1;
      // update the state so basket can pull new value
      this.forceUpdate();
      // if item not in array then add to array
    } else this.setState({ userList: this.state.userList.concat(foodItem) });
    // console.log("add");
  }
  onRemoveClick(foodID) {
    // find the index of the fooditem in the array and store it in variable
    let ind = this.state.userList.findIndex(this.findFoodByFoodID(foodID));
    // store qty property in a variable to manipulate in condition
    let foodQty = this.state.userList[ind].qty;
    // if qty is 1 then it removes in else statement, if > 1 then decrements
    if (foodQty >= 2) {
      this.state.userList[ind].qty = this.state.userList[ind].qty - 1;
      // update the state so basket can pull new value
      this.forceUpdate();
      // console.log("attempt");
    } else {
      let tempUserListArray = this.state.userList;
      tempUserListArray.splice(ind, 1);
      this.setState({ userList: tempUserListArray });
    }
  }
  clearArray() {
    this.setState({ userList: [] });
    // console.log("clear");
  }
  totalCalories(acc, obj) {
    return acc + obj.cals * obj.qty;
  }
  totalCarbon(acc, obj) {
    return acc + obj.carbon * obj.qty;
  }

  totalQty(acc, obj) {
    return acc + obj.qty;
  }
  render() {
    if (this.state.errorMsg) {
      return (
        <div className="error">
          <h1>We're very sorry: An error has occured in the API call</h1>

          <p>The error message is: {this.state.errorMsg.toString()}</p>
        </div>
      );
    } else if (this.state.isFetched === false) {
      return (
        <div className="fetching">
          <h1>We are loading your API request........</h1>
          <p>Your data will be here very soon....</p>
        </div>
      );
    } else {
      return (
        <div className="HomePage">
          <SearchBox
            onChange={this.onSearchBoxChange}
            searchTerm={this.state.searchTerm}
            onButtonClick={this.onButtonClick}
          />
          <h3>Search Results</h3>
          <div className="search-results">
            <table className="table table-sm table-bordered">
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
                {this.state.apiData
                  .filter(this.searchFilterFunction(this.state.searchTerm))
                  .map((a) => (
                    <tr key={a.foodID}>
                      <td>{a.name}</td>
                      <td>{a.cals}</td>
                      <td>{a.protein}</td>
                      <td>{a.fat}</td>
                      <td>{a.carbon}</td>
                      <td>1</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => this.onAddClick(a.foodID)}
                        >
                          +
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {this.state.userList.length > 0 && <h3>Basket</h3> }
          <Basket
            userList={this.state.userList}
            onClick={this.onRemoveClick}
            onClear={this.clearArray}
            totalCalories={this.totalCalories}
            totalCarbon={this.totalCarbon}
            totalQty={this.totalQty}
          />
            <Statistics
              userList={this.state.userList}
              totalCalories={this.totalCalories}
              totalCarbon={this.totalCarbon}
              totalQty={this.totalQty}
            />
        </div>
      );
    }
  }
}
export default HomePage;
