import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Homenav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }
  

  return (
    <div className="navSection">
      <nav className="navbar" id="web-view">
        <div className="logo-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679406558/ShowHub/image-removebg-preview_20_hthqmf.png"
            alt="logo"
            className="logo"
          />
          <h4 className="logo-text">ShowHub</h4>
        </div>

      
        <div id="big-screen">
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

{/* MOBILE NAVBAR */}


<nav className="navbar" id="mobile-view">
       <div id="mimie">
       <div className="logo-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679406558/ShowHub/image-removebg-preview_20_hthqmf.png"
            alt="logo"
            className="logo"
          />
          <h4 className="logo-text">ShowHub</h4>
        </div>

       <div>
        
       <button className="navbar-toggle" onClick={toggleNav}>
              <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
       </div>
       </div>
       

        <div  className={isOpen ? "nav-links active" : "nav-links"} id="toggle-navbar">
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

export default Homenav;
