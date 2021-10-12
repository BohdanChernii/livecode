import React, { Component } from 'react';
import LogIn from './LogIn.jsx';
import LogOut from './LogOut.jsx';
import Spinner from './Spinner.jsx';

//in:props(obj)
//out:JSX
// algo
// 1. SHOW LOGIN BY default
// 2. AFTER LOGIN CLICK - hide login & show Spinner for 2 seconds
// 3. AFTER 2 seconds - hide Spinner & show logout
// 4. AFTER logout click - hide logout & show login

class Auth extends Component {
  state = {
    isLogin: false,
    isProcesing: false,
  };

  loginHeader = () => {
    this.setState({ isProcesing: true });
    setTimeout(() => {
      this.setState({ isProcesing: false, isLogin: true });
    }, 2000);
  };

  logOutHeader = () => {
    this.setState({ isLogin: false });
  };

  render() {
    console.log('RENDER STARTED');
    const { isLogin, isProcesing } = this.state;
    if (isProcesing) {
      return <Spinner />;
    }
    return isLogin ? <LogOut onLogout={this.logOutHeader} /> : <LogIn onLogin={this.loginHeader} />;
  }
}

export default Auth;

//0. make a layout
//1. split to components
//2. static version in react
//3. declare state and props
//4. write logic
