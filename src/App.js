import React from "react";
import "./styles.scss";
import Landing from "./Sections/Landing";
import ChatBox from "./Sections/ChatBox";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="page_container">
      <Landing />
      <ChatBox />
      <Footer />
    </div>
  );
}

export default App;