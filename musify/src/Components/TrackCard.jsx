import React from "react";
import "../Styles/TrackCard.css";
import updateMood from "../api/updateMood";

const TrackCard = (props) => {
  const moodChanged = (tn, nm) => {
    updateMood(tn, nm)
    // document.getElementById('newmood').value = ''
  }
  return (
    <div
      class="card mt-2 mb-2"
      onClick={() => props.setActiveTrack(props.Name)}
    >
      <div class="card-body">
        <div class="container-fluid">
          <div className="row">
            <div class="col-sm-1">{props.Id}</div>
            <div class="col-sm-4">{props.Name}</div>
            <div class="col-sm-4">{props.Artist}</div>
            <div class="col-sm-2">
              <div class="input-group">
                <input type="text" class="form-control" style={{ height: '30px' }} id='newmood'/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary btn-sm" type="button" id="button-addon2" onClick={()=>moodChanged(props.Name, document.getElementById('newmood').value)}>change</button>
                </div>
              </div>
            </div>
            <div class="col-sm-1">{props.Duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrackCard;
