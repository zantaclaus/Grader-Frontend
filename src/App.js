import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./pages/Login";
import Home from "./pages/Home";

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
          <Route path="/" component={Home} />
          <Redirect path="/" exact to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
