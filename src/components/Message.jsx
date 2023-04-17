import React from 'react';

const Message = ({ from, message }) => {
  const { time, text } = message;
  const { name } = from;

  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i class="fa fa-circle online"></i> {name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {text}
      </div>
    </li>
  );
};

export default Message;
