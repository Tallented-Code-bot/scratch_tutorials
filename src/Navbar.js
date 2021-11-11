import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Scratch Tutorials</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/tutorials/create">Create</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
