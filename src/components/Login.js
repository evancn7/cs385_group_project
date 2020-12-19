import React, { Component } from 'react';
import Firebase from 'firebase';
// import styles
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: null };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }
  render() {
    const { email, password, error } = this.state;
    const handleInput = this.handleInputChange;
    return (
      <>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.email}
            onChange={handleInput}
            />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleInput}
            />

          <button className='btn btn-dark'>Sign In</button>
        </form>
      </>
    );
  }
}
export default Login;
