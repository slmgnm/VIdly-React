import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Movies from "./components/movies";
import NavBar from "./components/common/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MoviesDetails from "./components/common/moviesDetails";
import LoginForm from "./components/common/LoginForm";
import RegisterForm from "./components/common/RegisterForm";
import MovieForm from "./components/common/movieForm";
import "react-toastify/dist/react-toastify.esm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container p-5">
          <Switch>
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/RegisterForm" component={RegisterForm} />
            <Route path="/Movies" exact component={Movies} />
            <Route path="/Movies/:id" component={MoviesDetails} />
            <Route path="/Customers" component={Customers} />
            <Route path="/Rentals" component={Rentals} />
            <Redirect from="/" exact to="/Movies" />
            <Route path="/not-found" component={NotFound} />

            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
