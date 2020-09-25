import React, { Component } from "react";
import "../Styles/HomePage.css";
import TrackCard from "./TrackCard";
import { useEffect, useState } from "react";
import "../Images/bg.svg";
import GetPlaylist from "../api/GetPlaylist";
const HomePage = () => {
  const [result, setResult] = useState();
  const [tracksrc, setTrackSrc] = useState();
  const onSearchPressed = async () => {
    const inputMood = document.getElementById("inputMood").value;
    setResult(await GetPlaylist(inputMood));
  };
  const loadPlayer = () => {
    let player = document.getElementById("player");
    player.load();
    player.play();
  };
  return (
    <div className="page">
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand text-light" href="#">
          Musify
        </a>
      </nav>
      <div className="bg">
        <div className="container">
          <div class="input-group mb-3 pt-4">
            <input
              id="inputMood"
              type="text"
              class="form-control"
              placeholder="What's your mood?"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={onSearchPressed}
              >
                Search
              </button>
            </div>
          </div>
          <h5 className="float-left text-color">Quick Picks: </h5>
          <h4>
            <span class="badge badge-pill badge-light float-left">
              Cheerful
            </span>
          </h4>
          <h4>
            <span class="badge badge-pill badge-light float-left">
              Nostalgic
            </span>
          </h4>
          <h4>
            <span class="badge badge-pill badge-light float-left">Funky</span>
          </h4>
          <h4>
            <span class="badge badge-pill badge-light float-left">Cool</span>
          </h4>
          <h4>
            <span class="badge badge-pill badge-light float-left">
              Lightmooded
            </span>
          </h4>
        </div>
        <br />
        <hr />

        <div className="playlist p-4">
          {result && result ? (
            <h4 className="text-left text-color">Our Playlist Suggestion</h4>
          ) : (
            <h4 className="text-left ">Recommended</h4>
          )}
          {result && result
            ? result.map((x, key) => (
                <TrackCard
                  mt-2
                  mb-2card
                  mt-2
                  mb-2rd
                  setActiveTrack={(name) => {
                    setTrackSrc(name);
                    loadPlayer();
                  }}
                  Id={++key}
                  Name={x.Track_Name}
                  Artist={x.Track_Artist}
                  Mood={x.Track_Mood}
                  Duration={x.Track_Duration}
                />
              ))
            : ""}
        </div>

        <nav
          class="navbar navbar-expand-lg "
          style={{
            backgroundColor: "#191919",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          <h5 className="text-light">{tracksrc ? tracksrc : ""}</h5>
          <audio
            id="player"
            classname="float-right"
            controls
            style={{ width: "100%" }}
          >
            <source src="horse.ogg" type="audio/ogg" />
            <source
              src={"https://creedorians.000webhostapp.com/" + tracksrc + ".mp3"}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
