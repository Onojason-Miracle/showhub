import React from "react";
import Navbar from "./Navbar";
import Homefooter from "./Homefooter";
import HomePro from "./HomePro";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="wrapperDiv">
          <div className="headerDiv">
            <h4 className="wrapperHeader">ShowHub</h4>

            <h4 className="wrapperHeader2">enjoy watching</h4>

            <p className="headerPtag">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci
            </p>

            <p>
              <a href="index.html" className="  btn headerBtn ">
                Start Now
              </a>
            </p>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1679469937/ShowHub/image-removebg-preview_23_qvqkhx.png"
              alt="people watching movie"
              className="header-image"
            />
          </div>
        </div>
      </div>

      <HomePro />
      <Homefooter />
    </>
  );
}

export default Home;
