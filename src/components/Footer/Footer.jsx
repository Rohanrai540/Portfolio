import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/rohanrai540" },
    { icon: <FaTwitter />, link: "https://x.com/RohanRoy540" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rohan-rai-dev/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/___rohanrai___/?hl=en" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@tech_man_RR" },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-name">Rohan Rai</h2>

        <nav>
          <ul className="footer-nav">
            {navItems.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleScroll(item.id)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-socials">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="footer-copy">© 2025 Rohan Rai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
