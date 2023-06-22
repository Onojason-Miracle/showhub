import React, { useState, useEffect } from "react";
import Homenav from "./Homenav";
import Homefooter from "./Homefooter";
import { Link, useNavigate } from "react-router-dom";

function Movies() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    navigate("/overview", { state: { selectedMovie: movie } });
  };

  return (
    <>
      <Homenav />
      <h1 className="text-center mt-4">Popular Movies</h1>

      <div className="movies">
        <ul>
          {data.map((movie) => (
            <li className="card" key={movie.id}>
              <div className="card-body">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="movie pix"
                />

                <h5
                  className="card-title movie-link mt-3"
                  onClick={() => handleMovieClick(movie)}
                >
                  {movie.title}
                </h5>

                <p className="releasedate">
                  <b>Release Date: </b>
                  {movie.release_date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedMovie && (
        <div className="overview">
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          <p>
            <b>Release Date: </b>
            {selectedMovie.release_date}
          </p>
        </div>
      )}

      <div className="pages">
        <p id="active-page">
          <Link className="link" id="other-page" to="/Movies">
            1
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="other-page" to="/page2">
            2
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="active-page" to="/page3">
            3
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="other-page" to="/page4">
            4
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="other-page" to="/page5">
            5
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="other-page" to="/page6">
            6
          </Link>
        </p>
      </div>

      <Homefooter />
    </>
  );
}

export default Movies;

