import React from "react";


function Participant(props){
    let statusText = "";
    if (props.onStage === true){
        statusText = "on stage";
    } else if (props.onStage === true){
        statusText = "in session";
    } else {
        statusText = "left session";
    }
    
    return (
        <div className="participant">
             <div className="participant-avatar">
                <img src={props.avatar}></img>
             </div>
            <div className="participant-info">
                <div className="participant-name">
                    {props.name}
                </div>
                <div className="participant-status">
                    {statusText}
                </div>
            </div>
        </div>

    );
}

export default Participant;