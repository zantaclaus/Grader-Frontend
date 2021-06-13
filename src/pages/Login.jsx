import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import loginImage from "../images/loginImage.svg";
import "../css/login.css";
import Aos from "aos";

function Login(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="login-page">
      <div className="img-container">
        <img data-aos="fade-right" src={loginImage} alt="" />
      </div>
      <form data-aos="fade-down" className="login-form">
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
        <Link to="/" className="forgot">
          Forgot Password?
        </Link>
        <input type="submit" className="login-button" value="Login" />
      </form>
    </div>
  );
}

export default Login;
