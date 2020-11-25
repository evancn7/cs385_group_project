import React, { Component } from "react";
// import components
import NavBar from "./components/NavBar";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      isFetched: false,
      errorMsg: null
    };
  }

  async componentDidMount() {
    try {
      const searchTerm = "chicken";
      const API_ID = '9b339504';
      const API_KEY = 'de03aa2242cdbbc05811e7f119dd82b4';
      const API_URL =
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`;
      const response = await fetch(API_URL);
      const jsonResult = await response.json();

      this.setState({ apiData: jsonResult.parsed });
      this.setState({ isFetched: true });
    } catch (error) {
      this.setState({ isFetched: false });
      this.setState({ errorMsg: error });
    }
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
        <NavBar/>
        <div className="HomePage" class="container-fluid">
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
      );
    }
  }
}
export default HomePage;
