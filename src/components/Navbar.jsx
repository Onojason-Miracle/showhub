import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="navbar">
    
            <div className="logo-div">
                <img src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679406558/ShowHub/image-removebg-preview_20_hthqmf.png" alt="logo" className="logo"/>
                <h4 className="logo-text">ShowHub</h4>
            </div>

            <div>
                <ul>
                    <li>
                    <Link className="link" id="homeLink" to="/homepage">
                  Home
                </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar