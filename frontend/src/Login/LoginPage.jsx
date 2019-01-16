import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../Auth';
import NavBar from '../NavBar/NavBar';
import SidePane from '../SidePane/SidePane';

class LoginPage extends Component {


  render() {
    return (
      <div className="d-md-flex h-md-100 align-items-center">
        <div className="col-md-6 p-0 bg-skyblue h-md-100">
          <div className="d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <h1>MindBeWell</h1>
          </div>
        </div>

        <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <button type="button" class="btn btn-primary btn-lg">Click here to start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
