import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";

import AuthService from "./authService";
import PropTypes from "prop-types";

const Navbar = (props) => {
  //currentUser, setCurrentUser) => {
  //let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  if (props.currentUser) {
    return (
      <nav className="navbar">
        <h1>Scratch Tutorials</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/tutorials/create">Create</Link>
          <Link to="/tutorials/explore">Explore</Link>
          <button
            onClick={() => {
              AuthService.logout();
              props.setCurrentUser(AuthService.getCurrentUser());
            }}
          >
            Logout
          </button>
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <h1>Scratch Tutorials</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/tutorials/create">Create</Link>
          <Link to="/tutorials/explore">Explore</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
  }
};

Navbar.propTypes = {
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.string,
};

export default Navbar;
