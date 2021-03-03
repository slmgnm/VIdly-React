import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="navbar-brand">Vidly</div>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <NavLink className="nav-item nav-link " to="/movies">
            Movies
          </NavLink>

          <NavLink className="nav-item nav-link" to="/Customers">
            Customers
          </NavLink>

          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          {!user && <React.Fragment>
            
            {<NavLink className="nav-item nav-link" to="/LoginForm">
              Login
            </NavLink>}
            <NavLink className="nav-item nav-link" to="/registerForm">
              Register
            </NavLink>
          </React.Fragment>}
          {user && <React.Fragment>
           
            <NavLink className="nav-item nav-link" to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Logout">
              Logout
            </NavLink>
          </React.Fragment>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
