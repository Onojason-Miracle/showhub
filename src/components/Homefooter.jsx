import React from "react";
import { Link } from "react-router-dom";


function Homefooter(){
    return(
        <>
       
        <footer className="footer">
        <div className="footerDiv">
            <div className="social-links">
        <ul className="footerUL">
            <li>
                <h5>Social Links</h5>
            </li>
        </ul>

        <div>
            
        <div className="footer-links">
            <p>
                <a href="index.html" target="_blank" rel="noreferrer" className="footer-anchor"><i class="fa-solid fa-globe"></i>www.showhub.com</a>
            </p>

            <p>
            <a href="https://linked.com" target="_blank" rel="noreferrer" className="footer-anchor"><i class="fa-brands fa-linkedin-in"></i>ShowHub</a>
            </p>

            <p>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-anchor"><i class="fa-brands fa-twitter"></i>@showhub</a>
            </p>

            <p>
            <a href="tel:09088675423" target="_blank" rel="noreferrer" className="footer-anchor"><i class="fa-solid fa-phone-volume"></i>09088675423</a>
            </p>

            <p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-anchor"><i class="fa-brands fa-facebook-f"></i>ShowHub-Official</a>
            </p>

            <p>
            <a href="mailto:showhub@example.com, secondemail@example.com" target="_blank" rel="noreferrer" className="footer-anchor"><i class="fa-solid fa-envelope"></i>showhub@example.com</a>
            </p>
            
        </div>

        
      
        </div>
        </div>

        <div className="line"></div>

        <div className="sponsors">
        <ul className="footerUL">
            <li>
                <h5>Sponsors</h5>
            </li>
        </ul>
        <div className="footer-line">
            <div className="sponsors-text">
                <p>Cisco - Amazon - Google -Azure - LinkedIn</p>

                <p>IBM -Facebook -Tesla - Appel -Microsoft</p>

                <p>Ofppt - 1337</p>
            </div>
           

        </div>
        </div>

        <div className="line"></div>

        <div className="company">
        <ul className="footerUL">
            <li>
                <h5>Company</h5>
            </li>
        </ul>

        <div className="company-text">
            <div className="products">
            <Link to="/signup" className="signup-login">
                Signup
              </Link>
               
              <Link to="/homepage" className="signup-login wishlist">
                Wishlist
              </Link>
            </div>

            <div className="products">
            <Link to="/login" className="signup-login">
                Login
              </Link>

              <Link to="/service" className="signup-login">
                Our Products
              </Link>

                
            </div>
        </div>
        </div>

        </div>

        <div className="copyright">
            <p>A Fawectt book</p>
            <p>Published by The Random House Publishing Group</p>
            <p>Copyright © 2023 by Onojason</p>
            <p>All rights reserved</p>
        </div>
        </footer>
        </>
    )
}

export default Homefooter