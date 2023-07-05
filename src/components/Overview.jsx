import React from "react";
import { useLocation } from "react-router-dom";
import Homenav from "./Homenav";
import Homefooter from "./Homefooter";

function Overview() {
  const location = useLocation();
  const selectedMovie = location.state?.selectedMovie;
  const genres = location.state?.genres;

  if (!selectedMovie || !genres) {
    return <div>No movie selected</div>;
  }

  return (
    <div>
      <Homenav />
      <div className="overview-wrapper">
        <div className="overview">
          <div className="overview-img-div">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              className="overview-img"
              alt="movie pix"
            />
          </div>
          <div className="overview-details">
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
            <p>
              <b>Release Date: </b>
              {selectedMovie.release_date}
            </p>
            <p>
              <b>Popularity: </b>
              {selectedMovie.popularity}
            </p>
            <p>
              <b>Vote Average: </b>
              {selectedMovie.vote_average}
            </p>

            <p>
              <b>Original Language : </b>
              {selectedMovie.original_language}
            </p>

            <p>
              <b>Vote Count: </b>
              {selectedMovie.vote_count / 100 + "%"}
            </p>

            <p>
              <b>Movie Genre: </b>
              {selectedMovie.genre_ids
                .map((genreId) => {
                  const genre = genres.find((genre) => genre.id === genreId);
                  return genre ? genre.name : "";
                })
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
      <Homefooter />
    </div>
  );
}

export default Overview;
