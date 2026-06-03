import React from 'react';
import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left Side */}
        <div className="about-left">
          <h1 className="about-greeting">Hi, I am</h1>
          <h2 className="about-name">Rohan Rai</h2>
          <h3 className="about-role">
            <span className="role-prefix">I am a, </span>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p className="about-desc">
            <i>
              I am a full-stack developer passionate about creating dynamic and
              user-friendly web applications. Experienced in both front-end and
              back-end development, I work with the MERN stack and modern tools
              to build seamless interfaces and deliver efficient,
              high-performing solutions.
            </i>
          </p>
          <a
            href="https://drive.google.com/file/d/1POTdhqf7UFcxNa34xVeJ2vcBvicPoiLh/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cv-btn"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <Tilt
            className="about-tilt"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Rohan Rai" />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
