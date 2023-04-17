import React from 'react';

const Response = ({ from, message }) => {
	const { time, text } = message;
	const { name } = from;

	return (
		<li className="clearfix">
			<div className="message-data align-right">
				<span className="message-data-time">{time}</span> &nbsp; &nbsp;
				<span className="message-data-name">{name}</span> &nbsp;
				<i className="fa fa-circle me"></i>
			</div>
			<div className="message other-message float-right">
				{text}
			</div>
		</li>
	);
};

export default Response;
