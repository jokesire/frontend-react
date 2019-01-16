import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SidePane from '../SidePane/SidePane';

class LoginPage extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SidePane />
        <NavBar />
      </div>
    );
  }
}

export default withRouter(LoginPage);
