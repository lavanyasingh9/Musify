import React, { Component } from "react";
import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons/faStepBackward";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons/faPauseCircle";
import { faStepForward } from "@fortawesome/free-solid-svg-icons/faStepForward";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div class="footer">
        <FontAwesomeIcon
          id="btn"
          className="faStepBackward"
          icon={faStepBackward}
          size="2x"
        />
        <FontAwesomeIcon id="btn" icon={faPauseCircle} size="2x" />
        <FontAwesomeIcon id="btn" icon={faStepForward} size="2x" />
      </div>
    );
  }
}

export default Footer;
