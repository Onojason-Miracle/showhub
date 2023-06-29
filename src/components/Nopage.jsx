import React from "react";
import Homenav from "./Homenav";

function Nopage() {
  return (
    <>
      <Homenav />
      <div className="nopage">
        <div className="inner-nopage">
          <i class="fa-solid fa-face-frown-open nopage-icon"></i>
          <h1 className="text-center">
            Error 404 <br />
            Page not found
          </h1>
        </div>
      </div>
    </>
  );
}

export default Nopage;
