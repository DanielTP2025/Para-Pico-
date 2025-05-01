import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Schoolarium</h1>
      <p className="navbar-subtitle">La organización en un solo lugar</p>
      <button className="logout-btn">Cerrar sesión</button>
    </div>
  );
};

export default Navbar;



