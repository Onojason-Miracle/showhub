import React from "react";
import { Link } from "react-router-dom";
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
              Movies takes audiences on a thrilling journey through captivating
              storytelling, immersing them in a world of vivid characters and
              unexpected twists that leave them mesmerized from beginning to
              end.
              <br />
              Are you ready to embark on an unforgettable cinematic adventure?
              At our platform, we curate a vast collection of films from various
              genres, ensuring there's something for everyone.
            </p>

            <p className="pbtn">
              <Link className="  btn headerBtn " to="/service">
                {" "}
                Start Now
              </Link>
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
