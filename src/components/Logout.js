import React, { Component } from 'react';
import Firebase from 'firebase';

class Logout extends Component {
  constructor(props) {
  super(props);
  this.logOutUser = this.logOutUser.bind(this);
  }
  logOutUser() {
    Firebase.auth().signOut();
  }
  render() {
    return (
      <div className='Logout'>
        <button className='btn btn-dark' onClick={this.logOutUser}>Sign Out</button>
      </div>
    );
  }
}
export default Logout;
