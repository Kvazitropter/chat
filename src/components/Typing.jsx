import React from 'react';

const Typing = ({ from, message }) => {
	const { time } = message;
	const { name } = from;

	return (
		<li>
      <div className="message-data">
        <span className="message-data-name"><i class="fa fa-circle online"></i> {name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="typing">
        <div className="fa-circle online" />
        <div className="fa-circle online trnsp-half" />
        <div className="fa-circle online trnsp-q" />
      </div>
  </li>
	);
};

export default Typing;
