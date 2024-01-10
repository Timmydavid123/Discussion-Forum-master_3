import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <NavLink className="navbar-brand" to="/">
        <span style={{ color: "white" }}>Xooth</span>
      </NavLink>

      <NavLink className="nav-link" to="/dashboard">
        <span style={{ color: "white" }}>Forum</span>
      </NavLink>
      
      <NavLink className="nav-link" to="/news">
        <span style={{ color: "white" }}>News</span>
      </NavLink>

      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
        {/* Items inside collapsible section */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span style={{ color: "white" }}>Home</span>
            </NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to="/connect">
        <span style={{ color: "white" }}>Connect</span>
      </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          {!user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/login">
                  <span style={{ color: "white" }}>Login</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/register">
                  <span style={{ color: "white" }}>Register</span>
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/me">
                  <span style={{ color: "white" }}>Hi {user.username}</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/logout">
                  <span style={{ color: "white" }}>LogOut</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <button
        className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default NavBar;
