import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';
import NavBar from '../NavBar/NavBar';
import SidePane from '../SidePane/SidePane';

class LoginPage extends Component {
  render() {
    return (
      <div className= "wrapper">
        <SidePane />
        <NavBar />
      </div>
    );
  }
}

export default withRouter(LoginPage);
