import React, { Component } from "react";
import "../Styles/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import "../Images/bg.svg";
import Footer from "./Footer";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage">
        <div className="navbar">
          <FontAwesomeIcon className="faplay" icon={faPlay} size="1.5x" />
          Musify
        </div>
        <div className="container">
          <div className="row">
            <input type="text" placeholder="Search.." />
            <FontAwesomeIcon className="faSearch" icon={faSearch} size="2x" />
            <h2>Search a song with a mood</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
