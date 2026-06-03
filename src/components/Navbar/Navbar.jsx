import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="bracket">&lt;</span>
          <span className="name">Rohan</span>
          <span className="bracket">/</span>
          <span className="name">Rai</span>
          <span className="bracket">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? "active" : ""}>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="navbar-socials">
          <a href="https://github.com/Rohanrai540" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rohan-rai-dev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="navbar-mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="navbar-mobile-socials">
              <a href="https://github.com/Rohanrai540" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rohan-rai-dev/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
