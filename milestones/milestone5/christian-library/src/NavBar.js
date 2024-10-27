import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Christian Library
      </Link>
      <div className="navbar-links">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/create">
          Create Media
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
