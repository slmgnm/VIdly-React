import React, { Component } from "react";
import Input from "./input";
import Form from "./form";
import Joi from "joi-browser";
import { result } from "lodash";
class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // username = React.createRef();

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            onChange={this.handleChange}
            label="Username"
            // ref={username.value}
            value={data.username}
            errors={errors.username}
          />
          <Input
            name="password"
            onChange={this.handleChange}
            label="Password"
            value={data.password}
            errors={errors.password}
          />

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
