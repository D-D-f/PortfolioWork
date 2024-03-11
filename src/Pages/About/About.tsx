import "./About.css";
import img from "../../asset/img/moi.webp";

const About = () => {
  return (
    <section className="about-page">
      <h2>À propos de moi</h2>

      <div className="container-presentation">
        <img className="myimg" src={img} alt="ma photo" />

        <div className="text-presentation">
          <div className="title">
            <h3>David DE FREITAS</h3>
            <h4>Développeur React</h4>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            inventore enim architecto, libero sit, repellat mollitia a
            reprehenderit consectetur ratione veritatis optio velit numquam.
            Tenetur magnam vel obcaecati enim odit porro consectetur? Doloremque
            iure quisquam, odio amet recusandae eligendi reiciendis. Blanditiis
            quam expedita unde nesciunt ut corporis, saepe laudantium, tempora
            numquam voluptate nemo voluptates, sed eum. Error modi facilis fuga
            recusandae. Provident, sapiente autem? Ullam dolorum nihil
            voluptates ratione, quae quis earum neque, excepturi consectetur
            laboriosam facilis nesciunt quo numquam tempore nisi voluptatem
            tempora culpa non perspiciatis! Possimus quod quibusdam, facilis nam
            blanditiis ullam quo. Ad quidem rem eligendi atque?
          </p>
          <button>
            <a href="" download>
              Télécharger mon CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
