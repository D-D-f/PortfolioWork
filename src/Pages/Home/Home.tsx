import React from "react";
import myPicture from "../../asset/img/moi.webp";
import cv from "../../asset/img/DDF_cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <section className="Home">
      <div className="card">
        <figure>
          <img src={myPicture} alt="ma photo" />
          <h3>David de Freitas</h3>
          <h4>Développeur React</h4>

          <div className="contact">
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
        </figure>
        <button className="dowloadCV">
          <a href={cv} download>
            Télécharge mon cv
          </a>
        </button>
      </div>

      <div className="presentation">
        <h3>Bienvenue sur mon portfolio !</h3>
        <p className="text-presentation">
          Je suis David, développeur passionné. Depuis la découverte de ce
          métier, mon enthousiasme n'a cessé de croître. À travers ce portfolio,
          explore mes projets et découvre mon expertise en développement. Chaque
          ligne de code est le reflet de ma créativité et de mon engagement pour
          l'excellence. Prêt à construire l'avenir digital ensemble ? Merci de
          visiter !
        </p>
      </div>
    </section>
  );
};

export default Home;
