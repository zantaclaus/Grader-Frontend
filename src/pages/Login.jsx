import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Aos from "aos";
import auth from "../services/authService";
import Error from "../components/Error";
import loginImage from "../images/loginImage.svg";
import "../css/login.css";
import { delClass } from "../services/toggleService";
import Forgot from "../components/Forgot";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  componentDidUpdate() {
    delClass("root", "dark__mode");
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
    // console.log(this.state.errors);
  };

  doSubmit = async () => {
    try {
      const { account } = this.state;
      await auth.login(account.username, account.password);

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        // errors.username = ex.response.data.usernameNotFound;
        // errors.password = ex.response.data.passwordincorrect;
        errors.password = "Invalid username or password.";
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    const { account, errors } = this.state;
    return (
      <div>
        <div className="login-page">
          <div className="img-container">
            <img data-aos="fade-right" src={loginImage} alt="" />
          </div>
          <form
            data-aos="fade-down"
            className="login-form"
            onSubmit={this.handleSubmit}
          >
            <h1>Welcome to Grader!</h1>
            <h3>Login your account</h3>
            <div className="login-input username-input">
              <label htmlFor="" className="">
                Username
              </label>
              <input
                onChange={this.handleChange}
                value={account.username}
                name="username"
                type="text"
                placeholder="username"
                autoComplete="off"
                autoFocus
              />
              <Error error={errors.username} />
            </div>
            <div className="login-input password-input">
              <label htmlFor="" className="">
                Password
              </label>
              <input
                onChange={this.handleChange}
                value={account.password}
                name="password"
                type="password"
                placeholder="password"
                autoComplete="off"
              />
              <Error error={errors.password} />
            </div>
            <Forgot />
            <button className="login-button" disabled={this.validate()}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
