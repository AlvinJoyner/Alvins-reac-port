import React from "react";

function Footer() {
  return (
    // Footer section with the class name "footer"
    <footer className="footer">
      {/* Content section centered in the footer */}
      <div className="content has-text-centered">
        <p>
          {/* Strong emphasis on "My REACT Portfolio" */}
          <strong>My REACT Portfolio</strong> - a React site by{" "}
          {/* Link to my GitHub profile */}
          <a href="https://github.com/AlvinJoyner" target="_blank" rel="noreferrer">
            Alvin Joyner
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;