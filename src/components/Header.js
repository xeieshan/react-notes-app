import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div className="app-header">
      <h3>Header</h3>
      <Link to="/">Home</Link>
      <Link to="/welcome">Welcome</Link>
    </div>
  );
};

export default Header;
