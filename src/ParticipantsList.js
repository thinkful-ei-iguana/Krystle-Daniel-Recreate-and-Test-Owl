import React from "react";
import Participant from "./Participant";
import './ParticipantsList.css';

function ParticipantList(props){
    const participantArray = props.participants.map(participant => {
        return <Participant
            name={participant.name}
            avatar={participant.avatar}
            inSession={participant.inSession}
            onStage={participant.onStage}/>
    })
    
    return (
        <div className="participants-list">
            {participantArray}
        </div>
    )
}

export default ParticipantList;