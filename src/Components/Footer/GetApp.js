import React from "react";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/all";

function GetApp() {
  return (
    <div className="footer-get-app">
      <div className="footer-get-app-cont">
        <span>Get app</span>
        <Link>
          <FaGooglePlay />
        </Link>
        <Link>
          <FaApple />
        </Link>
      </div>
    </div>
  );
}

export default GetApp;
