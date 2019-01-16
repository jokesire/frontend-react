import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span />
              <span />
              <span />
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                {!auth0Client.isAuthenticated() && (
                  <button className="btn btn-dark" onClick={auth0Client.signIn}>
                    Sign In
                  </button>
                )}
                {auth0Client.isAuthenticated() && (
                  <div>
                    <label className="mr-2 text-white">
                      {auth0Client.getProfile().name}
                    </label>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default withRouter(NavBar);
