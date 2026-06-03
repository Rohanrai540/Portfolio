import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Section Title */}
      <div className="section-title wide" style={{ marginBottom: "4rem" }}>
        <h2>EXPERIENCE</h2>
        <div className="title-underline"></div>
        <p>
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-line"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`timeline-entry ${index % 2 === 0 ? "right" : "left"}`}
          >
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-logo exp">
                  <img src={experience.img} alt={experience.company} />
                </div>
                <div className="timeline-card-meta">
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.date}</p>
                </div>
              </div>
              <p className="timeline-card-desc">{experience.desc}</p>
              <div className="timeline-skills">
                <h5>Skills:</h5>
                <ul>
                  {experience.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
