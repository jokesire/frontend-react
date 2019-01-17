import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';
import Question from './Question/Question';
import Questions from './Questions/Questions';
import Callback from './Callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import LoginPage from './Login/LoginPage';
import FrontPage from './FrontPage/FrontPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    };
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false });
      return;
    }

    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }

    this.setState({ checkingSession: false });
  }

  // <Route path='/roster'/>
  // when the pathname is '/', the path does not match
  // when the pathname is '/roster' or '/roster/2', the path matches

  // <Route exact path='/roster'/>
  // If you only want to match '/roster', then you need to use
  // the "exact" prop. The following will match '/roster', but not
  // '/roster/2'.

  render() {
    return (
      <div>
        <SecuredRoute
          path="/"
          component={LoginPage}
          checkingSession={this.state.checkingSession}
        />
        <SecuredRoute
          path="/frontpage"
          component={FrontPage}
          checkingSession={this.state.checkingSession}
        />
        <SecuredRoute
          path="/questions"
          component={Questions}
          checkingSession={this.state.checkingSession}
        />
        <SecuredRoute
          path="/question/:questionId"
          component={Question}
          checkingSession={this.state.checkingSession}
        />
        <SecuredRoute
          path="/callback"
          component={Callback}
          checkingSession={this.state.checkingSession}
        />
        <SecuredRoute
          path="/new-question"
          component={NewQuestion}
          checkingSession={this.state.checkingSession}
        />
      </div>
    );
  }
}

export default withRouter(App);
