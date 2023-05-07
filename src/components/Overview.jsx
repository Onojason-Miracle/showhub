import React from "react";
import Homenav from "./Homenav";
import Movies from "./Movies";




// function Overview({ movie }) {
//   return (
//     <div>
//       <h2>{movie.title}</h2>
//       <p>{movie.overview}</p>
//       <p>Rating: {movie.vote_average}</p>
//       <p>Release Date: {movie.release_date}</p>
//     </div>
//   );
// }

// export default Overview;


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

  