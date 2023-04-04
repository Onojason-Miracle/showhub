import React from "react";
import Homenav from "./Homenav";
import Movies from "./Movies";


function Overview({ selectedMovie }) {

   
   
    
    if (typeof selectedMovie === "undefined" || selectedMovie === null) {
        return(
            <>
            <Homenav/>
            <h1>Error</h1>
            </>
          );
      }
       
       // or some other fallback component
    else{
        return (
            <div>
                <Homenav/>
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.overview}</p>
              <p>Release date: {selectedMovie.release_date}</p>
              <p>Runtime: {selectedMovie.runtime} minutes</p>
              <p>Vote average: {selectedMovie.vote_average}</p>
            </div>
          );
    }
  
    
  }
export default Overview  

  