import React from 'react';
const TrackCard = (props) => {
    return (
        <div class="card mt-2 mb-2" onClick={()=>props.setActiveTrack(props.Name)}>
            <div class="card-body">
                <div class="container-fluid">
                    <div className="row">
                        <div class="col-sm-1">
                            {props.Id}
                        </div>
                        <div class="col-sm-4">
                            {props.Name}
                        </div>
                        <div class="col-sm-4">
                            {props.Artist}
                        </div>
                        <div class="col-sm-2">
                            {props.Mood}
                        </div>
                        <div class="col-sm-1">
                            {props.Duration}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrackCard;