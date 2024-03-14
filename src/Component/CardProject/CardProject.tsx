import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./CardProject.css";

type CardsProjectProps = {
  img: string;
  title: string;
  stack: string[];
  link: string;
  github: string;
};

const CardProject: FC<CardsProjectProps> = ({
  img,
  title,
  stack,
  link,
  github,
}: CardsProjectProps) => {
  const displayStack = stack?.map((value: string, index: number) => (
    <li className="container-stack" key={index}>
      <figure className="stack-project">
        <img src={value} alt={value} />
      </figure>
    </li>
  ));

  return (
    <div className="card-project">
      <figure>
        <img src={img} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
      <ul className="stack">{displayStack}</ul>
      <div className="link-project">
        <span>
          <a href={link}>
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </span>
        <span>
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default CardProject;
