import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section id="skills" className="skills-section">
    {/* Section Title */}
    <div className="section-title">
      <h2>SKILLS</h2>
      <div className="title-underline"></div>
      <p>
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="skills-grid">
      {SkillsInfo.map((category) => (
        <div key={category.title} className="skills-category">
          <h3>{category.title}</h3>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="skills-items-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img src={skill.logo} alt={`${skill.name} logo`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
