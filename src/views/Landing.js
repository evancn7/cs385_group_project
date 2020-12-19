import React, { Component } from 'react';
import Firebase from 'firebase';
// import components
import Login from '../components/Login';
import App from '../App';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false, currentUser: null };
  }
  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      user
        ? this.setState(() => ({
            authenticated: true,
            currentUser: user
          }))
        : this.setState(() => ({
            authenticated: false,
            currentUser: null
          }));
    });
  }
  render() {
    return (
      <div className='Landing'>
        {this.state.authenticated && <App />}
        {!this.state.authenticated && <Login />}
      </div>
    );
  }
}
export default Landing;
