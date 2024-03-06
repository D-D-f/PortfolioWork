import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="all-icons">
        <span>
          <FontAwesomeIcon icon={faPaperPlane} size="xs" />
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} size="xs" />
        </span>

        <span>
          <FaLinkedin size="15" />
        </span>
      </div>
      <span className="roboto-medium-italic">© 2024 David de Freitas</span>
    </footer>
  );
};

export default Footer;
