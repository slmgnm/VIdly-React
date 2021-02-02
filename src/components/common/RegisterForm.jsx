import React, { Component } from "react";
import Input from "./input";
import Form from "./form";
import Joi from "joi-browser";
import { result } from "lodash";
class LoginForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().min(5).required().label("Name"),
  };

  // username = React.createRef();

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
