import React from "react";
import "../Styles/TrackCard.css";
const FeaturedTrackCard = (props) => {
    return (
        <div className="col-lg-2 p-0"
            onClick={() => props.setActiveTrack()}>
            <div class="card border" style={{ width: "10rem" }}>
                <img class="card-img-top" src={props.Url} alt="Card image cap"/>
                <div class="card-body" style={{ backgroundColor: 'white' }}>
                    <h6 class="card-title">{props.Name}</h6>
                    <p class="card-text">{props.Sub}</p>
                </div>
            </div>
        </div>
    );
};
export default FeaturedTrackCard;