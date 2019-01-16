import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (

    {/* Page Content Holder */},
    <div id="content">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        {
                          !auth0Client.isAuthenticated() &&
                          <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
                        }
                        {
                          auth0Client.isAuthenticated() &&
                          <div>
                            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                            <button className="btn btn-dark" onClick={()=> {signOut()}}>Sign Out</button>
                          </div>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default withRouter(NavBar);
