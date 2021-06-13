import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
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
