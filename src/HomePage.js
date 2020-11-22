import React, { Component } from "react";

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
      const API_ID = '';
      const API_KEY = '';
      const API_URL =
        'https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${API_ID}&app_key=${API_KEY}';
      console.log(API_URL);
      const response = await fetch(API_URL);
      const jsonResult = await response.json();

      this.setState({ apiData: jsonResult.results });
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
        <div className="HomePage">
        </div>
      );
    }
  }
}
export default HomePage;
