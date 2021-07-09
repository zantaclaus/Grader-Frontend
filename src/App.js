import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import GuideBook from "./pages/GuideBook";
import Manage from "./pages/Manage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import auth from "./services/authService";
import { setUser } from "./redux/actions/userAction";

function App(props) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = auth.getCurrentUser();
    dispatch(setUser(user));
  }, [dispatch]);

  // console.log("App user:", user);

  return (
    <React.Fragment>
      {user && <Navbar />}
      <div className="content__container">
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/tasks/:id" exact component={Task} />
          <ProtectedRoute path="/tasks" component={Tasks} />
          <ProtectedRoute path="/guidebook" component={GuideBook} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/manage" component={Manage} />
          <ProtectedRoute path="/home" component={Home} />
          <Redirect path="/" exact to="/home" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
