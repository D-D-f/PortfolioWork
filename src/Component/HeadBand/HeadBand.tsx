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
            <span></span> Accueil
          </li>
          <li>
            <span></span> À propos de moi
          </li>
          <li>
            <span></span> Compétences
          </li>
          <li>
            <span></span> Portfolio
          </li>
          <li>
            <span></span> Blog
          </li>
          <li>
            <span></span> Contact
          </li>
        </ul>
      </nav>

      <footer>
        <div className="icon"></div>
        <span className="roboto-medium-italic">© 2024 David de Freitas</span>
      </footer>
    </section>
  );
};

export default HeadBand;
