import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import auth from "./services/authService";
import { setUser } from "./redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function App(props) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = auth.getCurrentUser();
    dispatch(setUser(user));
  }, [dispatch]);

  console.log("App user:", user);

  return (
    <React.Fragment>
      {user && (
        <div className="navbar__container">
          <Navbar />
        </div>
      )}
      <div className="content__container">
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/tasks" component={Tasks} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/" component={Home} />
          <Redirect path="/" exact to="/home" />
        </Switch>
      </div>
    </React.Fragment>
  );
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
