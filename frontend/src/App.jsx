import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
    };

    this.setState({ checkingSession: false });
  }

  render() {
<<<<<<< HEAD

    return (
    <div class="wrapper">
        <SidePane/>
        <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
=======
    return (
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/frontpage' component={FrontPage}/>
        <Route exact path='/questions' component={Questions}/>
>>>>>>> 54df2fac5d149c0a0f41adf38a0532173ff5ee53
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question'
          component={NewQuestion}
          checkingSession={this.state.checkingSession} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
