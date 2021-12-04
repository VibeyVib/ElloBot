import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import './chatbot.css';

function Bot() {
  return (
    <div className="Bot">
      <div style={{ maxWidth: "300px" }}>
        <p> hello yuvaraj</p>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
    </div>
  );
}

export default Bot;