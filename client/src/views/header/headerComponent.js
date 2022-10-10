import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand " href="#">
        <Link to="/user" className="text-decoration-none text-muted">
          Welcome!
        </Link>
      </a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto" key="nav">
          <li className="nav-item active" key="nav-item">
            <a className="nav-link">
              {" "}
              <Link to="/user" className="text-decoration-none">
                Users
              </Link>
            </a>
          </li>
          <li className="nav-item" key="nav-item2">
            <a className="nav-link">
              {" "}
              <Link to="/company" className="text-decoration-none">
                Company
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
