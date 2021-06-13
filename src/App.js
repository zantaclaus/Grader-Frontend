import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
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
        <Switch>
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
        </Switch>
      </div>
    );
  }
}

export default App;
