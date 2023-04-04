import React from "react";
import { Link } from "react-router-dom";

function Homenav() {
  return (
    <div className="navSection">
      <nav className="navbar">
        <div className="logo-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679406558/ShowHub/image-removebg-preview_20_hthqmf.png"
            alt="logo"
            className="logo"
          />
          <h4 className="logo-text">ShowHub</h4>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/homepage">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/footer">Contact</Link>
            </li>
            <li>
              <Link to="/service">Products</Link>
            </li>
          </ul>
        </div>

        <div className="logsign">
          <ul>
            <li>
              <Link className="login-link" to="/login">Login</Link>
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
      </nav>
    </div>
  );
}

export default Homenav;
