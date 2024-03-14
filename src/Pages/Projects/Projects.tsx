import React from "react";
import CardProject from "../../Component/CardProject/CardProject";
import img1 from "../../asset/project/project1.png";
import reactIcon from "../../asset/logo/react-javascript-js-framework-facebook-svgrepo-com.svg";
import githubIcon from "../../asset/logo/github-142-svgrepo-com.svg";
import pnpmIcon from "../../asset/logo/light-pnpm-svgrepo-com.svg";
import "./Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
    {
      img: img1,
      title: "Portfolio en format VS CODE",
      stack: [reactIcon, githubIcon, pnpmIcon],
      link: "https://david-defreitas-portfolio.netlify.app",
      github: "https://github.com/D-D-f/Portfolio?tab=readme-ov-file",
    },
  ];

  const displayProjects = projects.map((value, index) => (
    <CardProject
      key={index}
      img={value.img}
      title={value.title}
      stack={value.stack}
      link={value.link}
      github={value.github}
    />
  ));

  return <section className="page-project">{displayProjects}</section>;
};

export default Projects;
