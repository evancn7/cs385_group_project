import React, { Component } from "react";

class App extends Component {
  render() {
    let members = ["Chris Boland", "Pavel", "Cristina Glez", "Evan Campion"];
    return (
      <div className="App">
        <h1>CS385 Group Project</h1>
        <ul>
          <li>{members[0]}</li>
          <li>{members[1]}</li>
          <li>{members[2]}</li>
          <li>{members[3]}</li>
        </ul>
      </div>
    );
  }
}
export default App;
