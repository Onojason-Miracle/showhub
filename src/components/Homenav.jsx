import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navSection">
      <nav className="navbar" id="navbar">
        <div className="logo-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679406558/ShowHub/image-removebg-preview_20_hthqmf.png"
            alt="logo"
            className="logo"
          />
          <h4 className="logo-text">ShowHub</h4>
        </div>

        <button
          class="hamburger"
          id="hamburger"
          onClick={() => {
            let x = document.getElementById("responsive-nav");

            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";

              x.style.width = "100%";
              x.style.margin = "auto";
            }
          }}
        >
          <svg
            class=""
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H24V3H0V0ZM0 7.5H24V10.5H0V7.5ZM0 15H24V18H0V15Z"
              fill="#000"
            />
          </svg>
        </button>

        <div id="responsive-nav">
          <div className="links">
            <ul>
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/searchbar">Search</Link>
              </li>
              <li>
                <Link to="/footer">Contact</Link>
              </li>
              <li>
                <Link to="/service">Products</Link>
              </li>
              <li>
                <Link to="/series">People</Link>
              </li>
            </ul>
          </div>

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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
