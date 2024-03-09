import "./About.css";
import img from "../../asset/img/moi.webp";

const About = () => {
  return (
    <section className="about-page">
      <div className="page-aboutme">
        <h2 className="roboto-bold">À propos de moi</h2>
      </div>

      <div className="text-presentation-about-page">
        <div className="image-about-page">
          <img src={img} alt="ma photo de profil" />
        </div>

        <div className="presentation">
          <div className="presentation-title">
            <h3 className="madimi-one-regular">David de Freitas</h3>
            <h4 className="madimi-one-regular">Développeur React</h4>
          </div>

          <p className="roboto-regular">
            Salut, je m'appelle David, et je suis un développeur web front-end
            passionné et créatif. Fraîchement diplômé d'une formation en React
            avec un diplôme de niveau bac +4, je suis actuellement en pleine
            reconversion professionnelle pour réaliser ma passion : le
            développement. Je code chaque jour pour rester à jour avec les
            dernières technologies, affiner mes compétences et relever de
            nouveaux défis. Mon engagement envers l'apprentissage continu me
            permet d'apporter des solutions innovantes à chaque projet.
          </p>

          <div>
            <button className="btn_cv">
              <a href="chemin/vers/ton-fichier.zip" download="Mon CV">
                Télécharger le fichier
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
