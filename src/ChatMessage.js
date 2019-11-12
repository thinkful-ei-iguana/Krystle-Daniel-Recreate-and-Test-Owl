import React from 'react';
import './ChatMessage.css';

function ChatMessage (props) {
  let avatar = '';
  let timeName = '';
  let message = '';
  let action = '';
  const part = props.participants;
  const id = props.participantId;
  let time = new Date(props.timestamp).toString();

  if (props.type === 'message') {
    avatar = (
      <div className="chat-avatar">
        <img src={part[id].avatar} alt="avatar"/>
      </div>);
    timeName = (
      <div className="chat-name-time">
        <span>{part[id].name}</span>
        <span>{time}</span>
      </div>);
    message = (
      <div className="chat-message">
        {props.message}
      </div>
    );
  } else if (props.type === 'thumbs-up') {
    action = (
      <div className="chat-action">
        {part[id].name} gave a thumbs up
      </div>
    );
  } else if (props.type === 'raise-hand') {
    action = (
      <div className="chat-action">
        {part[id].name} raised their hand
      </div>
    );
  } else if (props.type === 'thumbs-down') {
    action = (
      <div className="chat-action">
        {part[id].name} gave a thumbs down
      </div>
    );
  } else if (props.type === 'leave-stage') {
    action = (
      <div className="chat-action">
        {part[id].name} left the stage
      </div>
    );
  } else if (props.type === 'join-stage') {
    action = (
      <div className="chat-action">
        {part[id].name} joined the stage
      </div>
    );
  } else if (props.type === 'clap') {
    action =  (
      <div className="chat-action">
        {part[id].name} clapped
      </div>
    );
  } else if (props.type === 'join') {
    action = (
      <div className="chat-action">
        {part[id].name} joined
      </div>
    );
  }
  
  return (
    <div className="chat-message">
      {avatar}
      <div className="chat-message-line">
        {timeName}
        {message}
      </div>
      {action}
    </div>
  );
}

export default ChatMessage;