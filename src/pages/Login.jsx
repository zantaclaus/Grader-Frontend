import React from "react";
import loginImage from "../images/loginImage.svg";
import "../css/login.css";

function Login(props) {
  return (
    <div className="login-page">
      <div className="img-container">
        <img src={loginImage} alt="" />
      </div>
      <form className="login-form">
        <h1>Welcome to Grader!</h1>
        <h3>Register your account</h3>
        <div className="login-input username-input">
          <label htmlFor="" className="">
            Username
          </label>
          <input type="text" placeholder="username" />
        </div>
        <div className="login-input password-input">
          <label htmlFor="" className="">
            Password
          </label>
          <input type="password" placeholder="password" />
        </div>
        <a href="/" className="forgot">
          Forgot Password?
        </a>
        <input type="submit" className="login-button" value="Login" />
      </form>
    </div>
  );
}

export default Login;
