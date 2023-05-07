import React, { useState, useEffect } from "react";
import Homenav from "./Homenav";
import Homefooter from "./Homefooter";
import { Link } from "react-router-dom";
import Overview from "./Overview";

function Movies() {
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
   
    
    fetch(`https://api.themoviedb.org/3/tv/4%7D/season/1?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US `)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
        // setData(data.slice(0, 20));
      });
  }, []);

  const handleMovieClick = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0c8d9eb082bdb49bc2a86e9312bf02df&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSelectedMovie(data);
      });
  };

  // https://api.tvmaze.com/schedule/web?date=2023-04-10

  return (
    <>
      <Homenav />
      <h1 className="text-center mt-4">Popular Movies</h1>

      <div className="movies">

      {/* <ul>
        
  {Array.isArray(data) &&
    data.map((item) => (
      <li key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
      </li>
    ))}
</ul> */}



      <ul>
  {data ? data.map((movie) => {
    console.log("hello there"); // add console.log statement here
    return (
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
    );
  }) : null}
</ul>

  {/* <ul>
          {Array.isArray(data) &&
    data.map((movie)=> (
             
            <li className="card" key={movie.id}>
              <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
            <img src={movie.image} alt={movie.name} />
           <p>
           <a href={movie.url} target="_blank" rel="noreferrer"><b>URL</b></a>
           </p>
       

                

               
              </div>
            </li>
          )) }
        </ul>  */}

        <div className="pages">
          <p id="active-page">
            <Link className="link" id="active-page"  to="/Movies">
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
      </div>

      <Homefooter />
    </>
  );
}

export default Movies;
