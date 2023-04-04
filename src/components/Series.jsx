import React, { useState, useEffect } from "react";
import Homenav from "./Homenav";
import Homefooter from "./Homefooter";
import { Link } from "react-router-dom";
import Overview from "./Overview";

function Series() {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&query=Movie&language=en-US&page=2&year=2022`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      });
  }, []);

  const handleMovieClick = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSelectedMovie(data.results);
      });
  };

  return (
    <>
      <Homenav />
      <h1 className="text-center mt-4">Seasonal Movies</h1>
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

                <Link to="/overview">
                  <h5
                    className="card-title movie-link mt-3 "
                    onClick={() => handleMovieClick(movie.id)}
                  >
                    {movie.title}
                  </h5>
                </Link>

                <p className="card-text">{movie.rating}</p>
                <p>
                  <b>Release Date: </b>
                  {movie.release_date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <Overview selectedMovie={selectedMovie} /> */}

      {/* {selectedMovie && <Overview selectedMovie={selectedMovie} />} */}

      <Homefooter />
    </>
  );
}

export default Series;
