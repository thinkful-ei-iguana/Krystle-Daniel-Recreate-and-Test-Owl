import React from 'react';
import ChatMessage from './ChatMessage';
import './Chat.css';

const chatEvents = [
  {
      participantId: 3,
      type: 'message',
      message: 'Hello world',
      time: 1548852646559,
      timestamp: 1548852484247
  },
  {
      participantId: 2,
      type: 'thumbs-up',
      timestamp: 1548852484247
  },
  {
      participantId: 4,
      type: 'thumbs-down',
      timestamp: 1548852484247
  },
  {
      participantId: 1,
      type: 'raise-hand',
      timestamp: 1548852544247
  },
  {
      participantId: 1,
      type: 'clap',
      timestamp: 1548852544247
  },
  {
      participantId: 1,
      type: 'join',
      timestamp: 1548852544247
  },
  {
      participantId: 5,
      type: 'leave',
      timestamp: 1548852604247
  },
  {
      participantId: 3,
      type: 'join-stage',
      timestamp: 1548852664247
  },
  {
      participantId: 3,
      type: 'leave-stage',
      timestamp: 1548852724247
  }
];



function Chat(props) {
  const chatComponents = chatEvents.map(event => {
    return (
      <ChatMessage 
        participants={props.participants}
        participantId={event.participantId}
        type={event.type}
        message={event.message} 
        time={event.time}
        timestamp={event.timestamp}
      />
    );
  });

  return (
    <div className="chat">
      {chatComponents}
    </div>
  );
}

export default Chat;