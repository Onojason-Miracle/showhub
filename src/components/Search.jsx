// import React, { useState } from "react";

// function Search() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//     fetch(`https://api.themoviedb.org/3/find/%7Bexternal_id%7D?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US&external_source=imdb_id/api/search?query=${searchQuery}`)
//       .then((response) => response.json())
//       .then((data) => setSearchResults(data.results))
//       .catch((error) => console.log(error));
//   };

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={searchQuery} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {searchResults.map((result) => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search



// import React, { useState } from "react";

// function Search() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(`https://api.themoviedb.org/3/find/%7Bexternal_id%7D?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US&external_source=imdb_id/api/search?query=${searchQuery}`)
//       .then((response) => response.json())
//       .then((data) => setSearchResults(data.results))
//       .catch((error) => console.log(error));
      
//   };

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={searchQuery} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {searchResults && searchResults.map((result) => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search;



import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`0c8d9eb082bdb49bc2a86e9312bf02df/api/search?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setSearchResults(data.results);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

