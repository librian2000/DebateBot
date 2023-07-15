import React from "react";
import TextField from "@mui/material/TextField";

function ChatBox() {
  return (
    <div className = "chatbox-wrapper">
    <div className = "chatbox-section-title">
    Enter Your Argument Below to Debate Against the AI Bot
    </div>
    <div className="chatbox-section-input">
      <TextField
          id="outlined-basic"
          variant="outlined"
          style = {{width: 1000}}
          label="Your Argument: "
        />
    </div>
    </div>
  );
}

export default ChatBox;