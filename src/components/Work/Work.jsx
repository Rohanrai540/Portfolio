import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <div className="section-title wide" style={{ marginBottom: "4rem" }}>
        <h2>PROJECTS</h2>
        <div className="title-underline"></div>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleOpenModal(project)}
          >
            <div className="project-card-img-wrap">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-close-row">
              <button className="modal-close-btn" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-img-wrap">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-code"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-live"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
