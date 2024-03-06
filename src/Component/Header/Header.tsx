import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRectangleList,
  faHouse,
  faBriefcase,
  faBlog,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header ">
      <h1>
        <span className="style-first-letter">D</span>Df
      </h1>

      <nav>
        <ul className="header-navigation roboto-regular">
          <li>
            <span className="header-span">
              <FontAwesomeIcon icon={faHouse} />
            </span>
          </li>
          <li>
            <span className="header-span">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </li>
          <li>
            <span className="header-span">
              <FontAwesomeIcon icon={faRectangleList} />
            </span>
          </li>
          <li>
            <span className="header-span">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
          </li>
          <li>
            <span className="header-span">
              <FontAwesomeIcon icon={faBlog} />
            </span>
          </li>
          <li>
            <span className="header-span">
              <FontAwesomeIcon icon={faIdCard} />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
