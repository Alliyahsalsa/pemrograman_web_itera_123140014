import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function CustomNavHeader() { 
  const currentPath = window.location.pathname; 

  return (
    <header className="main-app-header">
      <h1 className="brand-title-text">
        📖 Catatan Buku Saya
      </h1>
      <div className="navigation-menu-links">
        <Link 
          to="/" 
          className={`nav-item-link ${currentPath === "/" ? "nav-item-active" : ""}`}
        >
          Daftar Buku
        </Link>
        <Link 
          to="/stats"
          className={`nav-item-link ${currentPath === "/stats" ? "nav-item-active" : ""}`}
        >
          Statistik
        </Link>
      </div>
    </header>
  );
}

export default CustomNavHeader;