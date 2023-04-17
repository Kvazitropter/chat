import React from 'react';
import Message from './Message.jsx';
import Response from './Response.jsx';
import Typing from './Typing.jsx';

const MessageHistory = ({ list }) => list.length > 0 && (
  <ul>
    {list.map((message) => {
      const { from, type, id } = message;

      switch(type) {
        case 'message':
          return <Message key={id} from={from} message={message} />;
        case 'response':
          return <Response key={id} from={from} message={message} />;
        case 'typing':
          return <Typing key={id} from={from} message={message} />;
        default:
          return null;
      };
    })}
  </ul>
);

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
