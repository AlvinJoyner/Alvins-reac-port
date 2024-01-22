import React from "react";

function Project(props) {
  return (
    <div>
      {/* Use the columns class from Bulma to create a responsive grid */}
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half" key={project.id}>
            {/* Render a card for each project */}
            <div className="card">
              {/* Display the project image */}
              <div className="card-image">
                <figure className="image is-4by3">
                  {/* Link the image to the live site */}
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img
                      src={process.env.PUBLIC_URL + project.image}
                      alt="Project Screenshot"
                    />
                  </a>
                </figure>
              </div>
              {/* Display the project details */}
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    {/* Display the project title */}
                    <p className="title is-4">{project.title}</p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {/* Display the project description */}
                  {project.description}
                  <br />
                  <br />
                  <div className="content is-family-code">
                    {/* Display the project languages */}
                    Languages: {project.languages}
                    <br />
                   
                  </div>
                  <div className="card">
                    {/* Display the project links */}
                    <footer className="card-footer">
                      {/* Link to the GitHub repository */}
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Look at the Repository
                      </a>
                      <br />
                      {/* Link to the live site */}
                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enjoy it on the live site!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;