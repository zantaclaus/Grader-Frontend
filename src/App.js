import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <div className="navbar__container">
            <Navbar />
          </div>
        )}
        <div className="content__container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/" component={Home} />
            <Redirect path="/" exact to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

/* <Switch>
  <Route path="/login" component={Login} />
  <React.Fragment>
    <div className="navbar__container">
      <Navbar />
    </div>
    <div className="content__container">
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Home} />
      <Redirect path="/" exact to="/home" />
    </div>
  </React.Fragment>
</Switch> */
