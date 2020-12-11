import React, { Component } from "react";
// import components
import SearchBox from "../components/SearchBox";
import Basket from "../components/Basket";

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
    // console.log("Buy clicked on " + foodID.toString());
    let foodItem = this.state.apiData.filter(this.findFoodByFoodID(foodID));
    this.setState({ userList: this.state.userList.concat(foodItem) });
    // console.log("add");
    // console.log(this.state.userList);
  }
  onRemoveClick(foodID) {
    var index = this.state.userList.filter(this.findFoodByFoodID(foodID));
    if (index > -1) {
      let tempUserListArray = this.state.userList;
      tempUserListArray.splice(index, 1);
      this.setState({ userList: tempUserListArray });
      // console.log("remove");
    }
  }
  clearArray() {
    this.setState({ userList: [] });
    // console.log("clear");
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
          <div class="container-fluid">
            <input type="text" placeholder="Enter food item.."></input>&nbsp;
            <button type="button" className="btn btn">Search</button>
            <table className="table table-sm table-bordered">
              <tr>
                <th>Food</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Fat</th>
                <th>Qty</th>
              </tr>
              {this.state.apiData.map((s) => (
              <tr key={s.food.foodId}>
                <td>{s.food.label}</td>
                <td>{s.food.nutrients.ENERC_KCAL}</td>
                <td>{s.food.nutrients.PROCNT}</td>
                <td>{s.food.nutrients.FAT}</td>
                <td><button type="button" className="btn btn-dark">+/-</button></td>
              </tr>
              ))}
            </table>
          </div>
          <h1>Basket.</h1>
          <Basket userList={this.state.userList} />   
        </div>


      );
    }
  }
}
export default HomePage;
