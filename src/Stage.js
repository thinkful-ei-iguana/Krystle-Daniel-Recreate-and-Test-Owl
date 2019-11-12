import React from 'react';
import StagedParticipant from './StagedParticipant';

function Stage(props) {
  const staged = props.participants.filter(participant => {
    return participant.onStage
  }).map(participant => {
    return <StagedParticipant name={participant.name} />
  });


  return (
    <div className="stage-area">
      {staged}
    </div>
  );
} 

export default Stage;