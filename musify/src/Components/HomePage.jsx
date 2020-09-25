import React, { Component } from "react";
import "../Styles/HomePage.css";
import TrackCard from "./TrackCard";
import FeaturedTrackCard from "./FeaturedTrackCard";
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
  const quickPick = (pick) => {
    document.getElementById("inputMood").value = pick;
    onSearchPressed()
  }
  return (
    <div className="page">
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#ffffff"}}>
        <h5 class="navbar-brand" href="#" style={{ color: '#212121'}}>
          <span style={{fontWeight: 800, color: "#1565c0"}}>Musify𝅘𝅥𝅮</span>
        </h5>
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
          <h4 onClick={()=>quickPick("cheerful")}>
            <span class="badge badge-pill badge-light float-left">
              cheerful
            </span>
          </h4>
          <h4 onClick={() => quickPick("nostalgic")}>
            <span class="badge badge-pill badge-light float-left">
              nostalgic
            </span>
          </h4>
          <h4 onClick={() => quickPick("happy")}>
            <span class="badge badge-pill badge-light float-left">happy</span>
          </h4>
          <h4 onClick={() => quickPick("sad")}>
            <span class="badge badge-pill badge-light float-left">sad</span>
          </h4>
          <h4 onClick={() => quickPick("calm")}>
            <span class="badge badge-pill badge-light float-left">
              calm
            </span>
          </h4>
        </div>
        <br />
        <hr />

        <div className="playlist">
          <div className="pl-4 pr-4">
            {result && result ? (
              <div><h4 className="text-left text-color">Our Playlist Suggestion</h4><br/></div>
            ) : (
                ''
              )}
            <div>
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
          </div>
          <div className="p-4 mb-5">
            <h4 className="text-left ">Featured Tracks</h4>
            <br/>
            <div class="pl-4 pr-4">
              <div class="row">
                <FeaturedTrackCard Name='Euphoria' Sub='Jungkook' setActiveTrack={() => { setTrackSrc('Euphoria'); loadPlayer(); }} Url='https://i.pinimg.com/originals/7b/dc/85/7bdc85d50fe59f3cd8a4f86c31ba3e35.jpg'/>
                <FeaturedTrackCard Name='Mercy' Sub='Shawn Mendes' setActiveTrack={() => { setTrackSrc('Mercy'); loadPlayer(); }} Url='https://i.pinimg.com/originals/93/46/ae/9346ae87fe8ffc5b2a9903c934a98832.jpg' />
                <FeaturedTrackCard Name="How Long" Sub='Charlie Puth' setActiveTrack={() => { setTrackSrc('How Long'); loadPlayer(); }} Url='https://upload.wikimedia.org/wikipedia/en/5/55/Charlie_Puth_Voicenotes.png' />
                <FeaturedTrackCard Name="Don't Wake Me" Sub='Chris Brown' setActiveTrack={() => { setTrackSrc("Don't Wake Me Up"); loadPlayer(); }} Url='https://www.telltalesonline.com/wp-content/uploads/2014/09/Chris-Brown-X-album-artwork.jpg'/>
                <FeaturedTrackCard Name="Perfect" Sub='Ed Sheeran' setActiveTrack={() => { setTrackSrc('Perfect'); loadPlayer(); }} Url='https://i.pinimg.com/originals/c5/34/a4/c534a4dc288c51e8365d5050fc3f81a2.jpg'/>
                <FeaturedTrackCard Name="Taki Taki" Sub='Selena Gomez' setActiveTrack={() => { setTrackSrc('Taki Taki'); loadPlayer(); }} Url='https://upload.wikimedia.org/wikipedia/en/f/f1/Stars_Dance.png'/>
              </div>
            </div>
          </div>
          
          
        <nav
          class="navbar navbar-expand-lg p-0"
          style={{
            backgroundColor: "#0d47a1",
            position: "fixed",
            bottom: 0,
            width: "100%"
          }}
        >
          <h5 className="text-dark" style={{position: "fixed", bottom: '40px', left: '50%', transform: 'translateX(-50%)'}}>{tracksrc ? tracksrc : "-"}</h5>
          <div className="player-container"
            style={{ width: "100%", backgroundColor: '#0d47a1' }}>
            <audio
              id="player"
              classname="fixed-bottom"
              controls
              style={{ width: "100%", backgroundColor: '#3d5afe', opacity: 0.4 }}
            >
              <source src="horse.ogg" type="audio/ogg" />
              <source
                src={"https://creedorians.000webhostapp.com/" + tracksrc + ".mp3"}
                type="audio/mpeg"
              />
            Your browser does not support the audio element.
          </audio>
          </div>
          </nav>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
