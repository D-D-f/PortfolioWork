import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRectangleList,
  faHouse,
  faBriefcase,
  faBlog,
  faIdCard,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import "./HeadBand.css";

const HeadBand = () => {
  return (
    <section className="Headband roboto-bold">
      <h1>
        <span className="style-first-letter">D</span>Df
      </h1>

      <nav>
        <ul className="headBand-navigation ">
          <li>
            <span className="headband-span">
              <FontAwesomeIcon icon={faHouse} />
            </span>{" "}
            Accueil
          </li>
          <li>
            <span className="headband-span">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            À propos de moi
          </li>
          <li>
            <span className="headband-span">
              <FontAwesomeIcon icon={faRectangleList} />
            </span>{" "}
            Compétences
          </li>
          <li>
            <span className="headband-span">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>{" "}
            Portfolio
          </li>
          <li>
            <span className="headband-span">
              <FontAwesomeIcon icon={faBlog} />
            </span>{" "}
            Blog
          </li>
          <li>
            <span className="headband-span">
              <FontAwesomeIcon icon={faIdCard} />
            </span>{" "}
            Contact
          </li>
        </ul>
      </nav>

      <footer>
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
    </section>
  );
};

export default HeadBand;
