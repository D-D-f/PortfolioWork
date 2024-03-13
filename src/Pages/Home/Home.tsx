import React from "react";
import myPicture from "../../asset/img/moi.webp";
import cv from "../../asset/img/DDF_cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import typescript from "../../asset/logo/typescript-svgrepo-com.svg";
import javascript from "../../asset/logo/javascript-svgrepo-com.svg";
import reactjs from "../../asset/logo/react-javascript-js-framework-facebook-svgrepo-com.svg";
import vscode from "../../asset/logo/vs-code-svgrepo-com.svg";
import webpack from "../../asset/logo/webpack-svgrepo-com.svg";
import docker from "../../asset/logo/docker-svgrepo-com.svg";
import pnpm from "../../asset/logo/light-pnpm-svgrepo-com.svg";
import npm from "../../asset/logo/npm-svgrepo-com.svg";
import github from "../../asset/logo/github-142-svgrepo-com.svg";
import nextjs from "../../asset/logo/next-js-svgrepo-com.svg";
import nodejs from "../../asset/logo/node-js-svgrepo-com.svg";
import java from "../../asset/logo/java-4-logo-svgrepo-com.svg";
import angular from "../../asset/logo/angular-icon-svgrepo-com.svg";
import mongodb from "../../asset/logo/mongodb-svgrepo-com.svg";
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
          Bonjour, je suis David, un développeur de 32 ans. Titulaire d'un
          diplôme Bac +4 en formation React, je suis actuellement en
          reconversion. Passionné par l'univers du web, je suis animé par une
          curiosité insatiable qui me pousse à explorer de nouvelles
          possibilités. Mon parcours témoigne de mon engagement envers le
          développement et l'intégration web, où chaque ligne de code est une
          opportunité d'apprentissage. Prêt à relever de nouveaux défis et à
          contribuer à des projets passionnants dans le monde numérique.
        </p>
      </div>

      <div className="all-card-competence">
        <div className="card-competence">
          <h4>Framework et langages maitrisés :</h4>
          <div className="all-icons">
            <figure>
              <img
                className="icon-langage"
                src={typescript}
                alt="logo typescript"
              />
              <figcaption>TypeScript</figcaption>
            </figure>
            <figure>
              <img
                className="icon-langage"
                src={javascript}
                alt="logo javascript"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={reactjs} alt="logo reactjs" />
              <figcaption>React JS</figcaption>
            </figure>
          </div>
        </div>

        <div className="card-competence">
          <h4>Outils de développement :</h4>
          <div className="all-icons">
            <figure>
              <img className="icon-langage" src={vscode} alt="logo vscode" />
              <figcaption>VScode</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={docker} alt="logo docker" />
              <figcaption>Docker</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={webpack} alt="logo webpack" />
              <figcaption>Webpack</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={pnpm} alt="logo pnpm" />
              <figcaption>Pnpm</figcaption>
            </figure>
          </div>
          <div className="all-icons">
            <figure>
              <img className="icon-langage" src={npm} alt="logo npm" />
              <figcaption>Npm</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={github} alt="logo github" />
              <figcaption>Github</figcaption>
            </figure>
          </div>
        </div>

        <div className="card-competence">
          <h4>Compétences à venir :</h4>
          <div className="all-icons">
            <figure>
              <img className="icon-langage" src={nextjs} alt="logo nextjs" />
              <figcaption>Next JS</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={nodejs} alt="logo nodejs" />
              <figcaption>NodeJS</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={java} alt="logo java" />
              <figcaption>Java</figcaption>
            </figure>
            <figure>
              <img className="icon-langage" src={angular} alt="logo angular" />
              <figcaption>Angular</figcaption>
            </figure>
          </div>
          <div className="all-icons">
            <figure>
              <img className="icon-langage" src={mongodb} alt="logo mongodb" />
              <figcaption>Mongo DB</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
