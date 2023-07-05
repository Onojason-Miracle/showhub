import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Homenav from "./Homenav";
import Homefooter from "./Homefooter";

function ActorsDetails() {
  const location = useLocation();
  const [selectedActor, setSelectedActor] = useState(null);

  useEffect(() => {
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
          setSelectedActor(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const selectedActor = location.state?.selectedActor;
    if (selectedActor) {
      fetchActorDetails(selectedActor.id);
    }
  }, [location.state]);

  if (!selectedActor) {
    return <div>No Actor selected</div>;
  }

  return (
    <div>
      <Homenav />
      <div className="details-wrapper">
        <div className="details">
          <div className="overview-img-div">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedActor.profile_path}`}
              className="overview-img"
              alt="actor pix"
            />
          </div>
          <div className="details-main">
            <h2>
              <b>{selectedActor.name}</b>
            </h2>
            <p>
              <h5>
                <b>Biography</b>
              </h5>
              {selectedActor.biography}
            </p>
            <p>
              <b>Place of Birth: </b>
              {selectedActor.place_of_birth}
            </p>

            <p>
              <b>Date of Birth: </b>
              {selectedActor.birthday}
            </p>
            <p>
              <b>Gender: </b>
              {selectedActor.gender === 1 ? "Female" : "Male"}
            </p>
            <p>
              <b>Popularity: </b>
              {selectedActor.popularity}
            </p>
            <p>
              <b>Date of Death: </b>
              {selectedActor.deathday}
            </p>
          </div>
        </div>
      </div>
      <Homefooter />
    </div>
  );
}

export default ActorsDetails;
