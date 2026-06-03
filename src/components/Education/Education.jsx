import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Section Title */}
      <div className="section-title wide" style={{ marginBottom: "4rem" }}>
        <h2>EDUCATION</h2>
        <div className="title-underline"></div>
        <p>
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-line"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`timeline-entry ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-logo edu">
                  <img src={edu.img} alt={edu.school} />
                </div>
                <div className="timeline-card-meta">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <p>{edu.date}</p>
                </div>
              </div>
              <p className="timeline-card-grade">Grade: {edu.grade}</p>
              <p className="timeline-card-desc">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
