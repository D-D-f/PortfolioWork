import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const listNav: ReactNode[] = [
    <span>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />{" "}
        <span className="span-text-nav">Accueil</span>
      </Link>
    </span>,
    <span>
      <Link to="/projects">
        <FontAwesomeIcon icon={faRectangleList} />{" "}
        <span className="span-text-nav">Projets</span>
      </Link>
    </span>,
  ];

  const displayListNav = listNav.map((value, index) => (
    <li key={index}>{value}</li>
  ));

  return (
    <nav>
      <ul>{displayListNav}</ul>
    </nav>
  );
};

export default Navigation;
