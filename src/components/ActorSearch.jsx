import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ActorSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [noResults, setNoResults] = useState(false); // State for no results message

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/person?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&query=${searchQuery}&include_adult=false&language=en-US&page=1`
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

  const handleActorsClick = (actor) => {
    navigate("/actors_details", { state: { selectedActor: actor } });
  };

  const handleMovieClick = (movie) => {
    navigate("/overview", { state: { selectedMovie: movie, genres: genres } });
  };

  return (
    <div>
      <div className="search-wrapper">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="search-form-input"
            placeholder="Search actors/actresses by name"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        {noResults ? (
          <p className="text-center mt-3">No results found</p>
        ) : (
          <ul className="search-ul">
            {searchResults.map((result) => (
              <li key={result.id} className="card search-li">
                <div className="card-body">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${result.profile_path}`}
                    className="card-img-top"
                    alt="actor pix"
                  />
                  <h5
                    className="card-title movie-link mt-3"
                    onClick={() => handleActorsClick(result)}
                  >
                    {result.name}
                  </h5>

                  <p className="releasedate">
                    <b>Known For: </b>
                    {result.known_for.map((movie) => (
                      <div
                        key={movie.id}
                        className="people-movie-link"
                        onClick={() => handleMovieClick(movie)}
                      >
                        {movie.title}
                      </div>
                    ))}
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

export default ActorSearch;
