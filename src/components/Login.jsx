import React, { Component } from 'react';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';

import '../styles/signIn.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" value="Submit form">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
