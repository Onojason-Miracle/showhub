import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [genres, setGenres] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // 1. maintain state
    // 2. the search param should be included in the url

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setSearchResults(data.results);
          setNoResults(false); // Reset no results message
        } else {
          setSearchResults([]);
          setNoResults(true); // Set no results message to true
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // Fetch genres
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    navigate("/overview", { state: { selectedMovie: movie, genres: genres } });
  };

  return (
    <div>
      <div className="search-wrapper">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="search"
            value={searchQuery}
            onChange={handleInputChange}
            className="search-form-input"
            placeholder="search by movie name"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        {noResults ? (
          <p className="text-center mt-3 text-danger">No results found</p>
        ) : (
          <ul className="search-ul">
            {searchResults.map((result) => (
              <li key={result.id} className="card search-li">
                <div className="card-body">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                    className="card-img-top"
                    alt="movie pix"
                  />

                  <h5
                    className="card-title movie-link mt-3"
                    onClick={() => handleMovieClick(result)}
                  >
                    {result.title}
                  </h5>

                  <p className="releasedate">
                    <b>Release Date: </b>
                    {result.release_date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
