import React, { useState, useEffect } from "react";
import Homenav from "./Homenav";
import Homefooter from "./Homefooter";
import { Link, useNavigate } from "react-router-dom";
import ActorSearch from "./ActorSearch";

function Actors() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedActor, setSelectedActor] = useState(null);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&l&page=4
      `
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

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

  const fetchActorDetails = (id) => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch actor details");
        }
        return response.json();
      })
      .then((data) => {
        navigate("/actors_details", { state: { selectedActor: data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleActorsClick = (actor) => {
    fetchActorDetails(actor.id);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    navigate("/overview", { state: { selectedMovie: movie, genres: genres } });
  };

  return (
    <>
      <Homenav />
      <ActorSearch />
      <h1 className="text-center mt-4">Popular Actors</h1>
      <div className="movies">
        <ul>
          {data.map((actor) => (
            <li className="card" key={actor.id}>
              <div className="card-body">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  className="card-img-top"
                  alt="actors pix"
                />
                <h5
                  className="card-title movie-link mt-3"
                  onClick={() => handleActorsClick(actor)}
                >
                  <b>{actor.name}</b>
                </h5>

                <p className="releasedate">
                  <b>Known For: </b>
                  {actor.known_for.map((movie) => (
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
      </div>
      {selectedMovie && (
        <div className="overview">
          <p>{selectedMovie.overview}</p>
        </div>
      )}
      <Homefooter />
    </>
  );
}

export default Actors;
