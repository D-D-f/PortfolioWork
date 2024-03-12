import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <h2>© David de Freitas 2024</h2>
      <div className="contact-footer">
        <a href="https://github.com/D-D-f">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/david-de-freitas-a85467206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:defreitas-david@outlook.fr">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
