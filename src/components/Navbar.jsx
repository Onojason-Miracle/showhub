import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navwrapper">
      <div className="Navbar">
        <div className="Navbar-brand">
          <div className="logo-div">
            <img
              src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679406558/ShowHub/image-removebg-preview_20_hthqmf.png"
              alt="logo"
              className="logo"
            />
            <h4 className="logo-text">ShowHub</h4>
          </div>
          <button
            className={`Navbar-toggler ${isOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            <span className="Navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={` Navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="Navbar-nav links ">
            <li className="Nav-item">
              <Link to="/" className="Nav-link">
                Home
              </Link>
            </li>

            <li className="Nav-item">
              <Link to="/movies" className="Nav-link">
                Movies
              </Link>
            </li>
            <li className="Nav-item">
              <Link to="/service" className="Nav-link">
                Products
              </Link>
            </li>
            <li className="Nav-item">
              <Link to="/actors" className="Nav-link">
                Actors
              </Link>
            </li>
            <li className="Nav-item">
              <Link to="/footer" className="Nav-link">
                Contact
              </Link>
            </li>

            <div className="logsign">
              <ul>
                <li>
                  <Link className="login-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <div>
                    <Link to="/signup" className="signup">
                      Signup
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
