// import React from "react";
// import Homenav from "./Homenav";
// import { useLocation } from "react-router-dom";

// function Overview() {
//   const location = useLocation();
//   const selectedMovie = location.state?.selectedMovie;

//   if (!selectedMovie) {
//     return (
//       <>
//         <Homenav />
//         <h1>Error</h1>
//       </>
//     );
//   } else {
//     return (
//       <div>
//         <Homenav />
//         <h2>{selectedMovie.title || "Title not available"}</h2>
//         <p>{selectedMovie.overview || "Overview not available"}</p>
//         <p>Release date: {selectedMovie.release_date || "Date not available"}</p>
//         <p>Runtime: {selectedMovie.runtime || "Runtime not available"} minutes</p>
//         <p>Vote average: {selectedMovie.vote_average || "Vote average not available"}</p>
//       </div>
//     );
//   }
// }

// export default Overview;






// Overview.js
// import React from "react";

// function Overview(props) {
//   const { selectedMovie } = props;

//   if (!selectedMovie) {
//     return null;
//   }

//   return (
//     <div className="overview">
//       <h2>{selectedMovie.title}</h2>
//       <p>{selectedMovie.overview}</p>
//       <p>
//         <b>Release Date: </b>
//         {selectedMovie.release_date}
//       </p>
//     </div>
//   );
// }

// export default Overview;


import React from "react";


function Overview(props) {
  console.log("propperty: ", props);
  console.log("locationsite: ", props.location);
  const selectedMovie = props.location.state?.selectedMovie;

  console.log("selectedMovie: ", selectedMovie);

  if (!selectedMovie) {
    return <div>No movie selected</div>;
  }

  return (
    <div className="overview">
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.overview}</p>
      <p>
        <b>Release Date: </b>
        {selectedMovie.release_date}
      </p>
    </div>
  );
}



// function Overview(props) {
//   console.log("props: ", props);
//   const selectedMovie = props.location.state.selectedMovie;

//   console.log("selectedMovie: ", selectedMovie);

//   if (!selectedMovie) {
//     return <div>No movie selected</div>;
//   }

//   return (
//     <div className="overview">
//       <h2>{selectedMovie.title}</h2>
//       <p>{selectedMovie.overview}</p>
//       <p>
//         <b>Release Date: </b>
//         {selectedMovie.release_date}
//       </p>
//     </div>
//   );
// }

export default Overview


































// import React from "react";
// import Homenav from "./Homenav";
// import { useLocation } from "react-router-dom";
// import Movies from "./Movies";



// function Overview() {

//   // const location = useLocation();
//   // const selectedMovie = location.state.selectedMovie;

//   const location = useLocation();
//   const selectedMovie = location.state?.selectedMovie;


//   if (!selectedMovie) {
//     return (
//       <>
//         <Homenav />
//         <h1>Error</h1>
//       </>
//     );

//     // } else if (selectedMovie) {
//     //   return (
//     //     <div>
//     //       <Homenav />
//     //       <h2>{selectedMovie.title}</h2>
//     //       <p>{selectedMovie.overview}</p>
//     //       <p>Release date: {selectedMovie.release_date}</p>
//     //       <p>Runtime: {selectedMovie.runtime} minutes</p>
//     //       <p>Vote average: {selectedMovie.vote_average}</p>
//     //     </div>
//     //   );
//     // }
    

//   } else {
//     return (
//       <div>
//         <Homenav />
//         <h2>{selectedMovie.title}</h2>
//         <p>{selectedMovie.overview}</p>
//         <p>Release date: {selectedMovie.release_date}</p>
//         <p>Runtime: {selectedMovie.runtime} minutes</p>
//         <p>Vote average: {selectedMovie.vote_average}</p>
//       </div>
//     );
//   }
  


   
    
//     // if (typeof selectedMovie === "undefined" || selectedMovie === null) {
//     //     return(
//     //         <>
//     //         <Homenav/>
//     //         <h1>Error</h1>
//     //         </>
//     //       );
//     //   }
       
      
//     // else{
//     //     return (
//     //         <div>
//     //             <Homenav/>
//     //           <h2>{selectedMovie.title}</h2>
//     //           <p>{selectedMovie.overview}</p>
//     //           <p>Release date: {selectedMovie.release_date}</p>
//     //           <p>Runtime: {selectedMovie.runtime} minutes</p>
//     //           <p>Vote average: {selectedMovie.vote_average}</p>
//     //         </div>
//     //       );
//     // }
  
    
//   }
// export default Overview  

  



// import React from "react";
// import Homenav from "./Homenav";
// import { useLocation } from "react-router-dom";

// function Overview() {
//   const location = useLocation();
//   const selectedMovie = location.state?.selectedMovie;

//   if (!selectedMovie) {
//     return (
//       <>
//         <Homenav />
//         <h1>Error</h1>
//       </>
//     );
//   } else {
//     return (
//       <div>
//         <Homenav />
//         <h2>{selectedMovie.title}</h2>
//         <p>{selectedMovie.overview}</p>
//         <p>Release date: {selectedMovie.release_date}</p>
//         <p>Runtime: {selectedMovie.runtime} minutes</p>
//         <p>Vote average: {selectedMovie.vote_average}</p>
//       </div>
//     );
//   }
// }

// export default Overview;
