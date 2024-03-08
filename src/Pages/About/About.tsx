import "./About.css";
import img from "../../asset/img/moi.webp";

const About = () => {
  return (
    <section className="about-page">
      <h2>À propos de moi</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio sunt
        deserunt dolore expedita aperiam, voluptate explicabo suscipit
        architecto, aliquid facere natus. Aut laudantium, dolor odit totam vero
        sed earum!
      </p>

      <div className="text-presentation-about-page">
        <div className="image-about-page">
          <img src={img} alt="ma photo de profil" />
        </div>

        <div className="presentation">
          <div className="presentation-title">
            <h3>David de Freitas</h3>
            <h4>Développeur React</h4>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            accusamus repellat soluta consectetur eveniet est, alias corrupti
            voluptatem dicta, facere deserunt porro quod adipisci corporis sed,
            earum odio accusantium? Soluta.
          </p>

          <div>
            <button>Télécharger mon CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
