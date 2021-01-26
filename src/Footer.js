import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by{" "}
        <a
          className="source"
          href="https://www.instagram.com/facies_lunae/"
          rel="noreferrer"
          target="_blank"
        >
          @facies_lunae
        </a>
        <br />
        <a
          className="source"
          href="https://github.com/Aikusoid/react-weather-app"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
      </footer>
    </div>
  );
}
