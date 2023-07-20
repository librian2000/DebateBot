import React, {useState} from "react";
import Popup from 'reactjs-popup';
import TextField from "@mui/material/TextField";

function ChatBox() {
  const [speak, setSpeak] = useState(true);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  return (
    <div className = "chatbox-wrapper">
    <div className = "chatbox-section-title">
    Type or Speak Your Argument Below to Debate Against the AI Bot
    </div>
    <div className="chatbox-argument">
        <div className="chatbox-arg-child">
        <form onSubmit={() => setInput(text)}>
        <TextField
            onChange={(e) => setText(e.target.value)}
            id="outlined-basic"
            variant="outlined"
            style = {{width: 1000}}
            label="Your Argument: "
            />
        </form>
        </div>
        <div className="chatbox-arg-child">
        <button className="speak-button" onClick={() => setSpeak(!speak)}> {speak ? "Speak" : "Done"} </button>
        </div>
        <div className="chatbox-arg-child">
         <div>{speak ? "" : "Start Speaking..." }</div>
         </div>
    </div>
    <div className="chatbox-section-output">
      <TextField
          id="outlined-basic"
          variant="outlined"
          style = {{width: 1000}}
          label="AI Response: "
          value={input}
        />
    </div>
    </div>
  );
}

export default ChatBox;