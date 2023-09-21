import "./Intro.css";
import { IntroImage, secondLogo } from "../../assets";

const Intro = () => {
  return (
    <section className="container__container intro__container">
      <div className="container intro__content ">
        <div className="intro__text">
          <h4>EXPLORE MORE</h4>
          <h2>THE FAVOURITES AND THE FUTURE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ullam quaerat, culpa quos laborum provident eius facere voluptas
            magnam repellat debitis voluptatem deserunt quisquam, eum error
            quibusdam asperiores eveniet? Voluptate.
          </p>
          <img src={secondLogo} alt="secondLogo" />
        </div>
        <div className="intro__image">
          <img src={IntroImage} alt="Intro" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
