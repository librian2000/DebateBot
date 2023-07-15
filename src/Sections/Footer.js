import React from "react";

function Footer() {
  return (
    <div className="footer_section">
      <div className="footer_columns">
        <div className="column">
          <div className="title">Debate Bot</div>
          <div className="subtitle">Powered by AI</div>
        </div>
        <div className="column">
          <div className="title">Contact</div>
          <a href="https://twitter.com">
            <div className="subtitle">Twitter</div>
          </a>
          <div className="subtitle">Discord</div>
        </div>
        <div className="column">
          <div className="title">Links</div>
          <div className="subtitle">Instagram</div>
          <div className="subtitle">Facebook</div>
        </div>
      </div>
      <div className="bottom">© 2023 Debate Bot. All rights reserved.</div>
    </div>
  );
}

export default Footer;