import React from "react";

function Resume() {
  return (
    <div className="columns">
      {/* Column for the resume */}
      <div className="column">
        <p className="content is-medium">RESUME</p>
        <hr />

        {/* Link to download the resume */}
        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + ""}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      {/* Column for the skills */}
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />

        {/* List of proficiencies */}
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>JSON, CHATGPT</li>
          <li>SQL,Sequelize</li>
          <li>React, Node.js, </li>
          <li>MERN</li>
          <li>Full Stack Web Dev</li>
         
        </ul>
      </div>
    </div>
  );
}

export default Resume;