import React from 'react';
import MessageHistory from './MessageHistory.jsx';
import messages from '../assets/messages.js';

const App = () => (
  <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        <MessageHistory list={messages} />
      </div>
    </div>  
  </div>
);

export default App;
