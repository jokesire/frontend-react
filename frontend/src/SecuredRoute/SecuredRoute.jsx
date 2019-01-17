import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../Auth';

// <Route path='/roster'/>
// when the pathname is '/', the path does not match
// when the pathname is '/roster' or '/roster/2', the path matches

// <Route exact path='/roster'/>
// If you only want to match '/roster', then you need to use
// the "exact" prop. The following will match '/roster', but not
// '/roster/2'.

function SecuredRoute(props) {
  const { component: Component, path, checkingSession } = props;
  return (
    <Route path={path} render={() => {
      if (checkingSession) return <h3 className="text-center">Validating session...</h3>;
      if (!auth0Client.isAuthenticated()) {
        auth0Client.signIn();
        return <div></div>;
      }

      return <Component />;
    }} />
  );
}

export default SecuredRoute;
