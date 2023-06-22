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
      `https://api.themoviedb.org/3/trending/person/day?language=en-US'
      `
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
          {data.map((people) => (
            <li className="card" key={people.id}>
              <div className="card-body">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${people.poster_path}`}
                  className="card-img-top"
                  alt="movie pix"
                />

                <h5
                  className="card-title movie-link mt-3"
                  onClick={() => handleMovieClick(people)}
                >
                  {people.name}
                </h5>

                <p className="releasedate">
                  <b>Release Date: </b>
                  {people.first_air_date}
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
          <Link className="link" id="active-page" to="/Movies">
            1
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="other-page" to="/page2">
            2
          </Link>
        </p>

        <p id="other-page">
          <Link className="link" id="other-page" to="/page3">
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

