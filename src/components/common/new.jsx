import React, { Component } from "react";
// import Input from "./input";
import Form from "./form";
import Joi from "joi-browser";
import { genres } from "./../../services/fakeGenreService";
import Movies from "./../movies";

class New extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres:[],
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.required().label("Genre"),
    numberInStock: Joi.string().required().label("Number in Stock"),
    dailyRentalRate: Joi.string().required().label("Rate"),
  };

  doSubmit = () => {
    {
      const data = { ...this.state.data };
      this.props.history.push("/Movies");
      this.setState({ Movies });
    }
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default New;
