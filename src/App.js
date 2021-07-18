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
import Submission from "./pages/Submission";

function App(props) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    dispatch(setUser(currentUser));
  }, [dispatch]);

  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "111202361234818");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      const FB = window.FB;
      FB.init({
        xfbml: true,
        version: "v11.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });

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
          <ProtectedRoute path="/submission" component={Submission} />
          <ProtectedRoute path="/guidebook" component={GuideBook} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/manage" component={Manage} />
          <ProtectedRoute path="/home" component={Home} />
          <Redirect path="/" exact to="/home" />
        </Switch>
      </div>

      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </React.Fragment>
  );
}

export default App;
