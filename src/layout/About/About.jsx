import "./About.scss";
import TechnologyIcon from "../../components/TechnologyIcon/TechnologyIcon";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__information">
        <h4 className="information__subtitle">Who i am?</h4>
        <p className="information__text">
          I'm a 23 year old guy originally from Mexico City but currently living
          in Querétaro.
        </p>
        <p className="information__text">
          I started to study self-taught technologies related to web development
          at the end of 2020.
        </p>
        <p className="information__text">
          Currently I'm looking for new professional opportunities, so I invite
          you to take a look at some projects that I have developed in order to
          demonstrate what I can do. If you like the way I work, I'm available
          at all times to talk with you.
        </p>
        <div className="technologies">
          <h4 className="technologies__subtitle">Technologies that i use</h4>
          <div className="technologies__icons">
            <TechnologyIcon technologyName="HTML" />
            <TechnologyIcon technologyName="CSS" />
            <TechnologyIcon technologyName="JavaScript and TypeScript" />
            <TechnologyIcon technologyName="React" />
            <TechnologyIcon technologyName="Java" />
            <TechnologyIcon technologyName="Spring Boot" />
            <TechnologyIcon technologyName="Hibernate" />
            <TechnologyIcon technologyName="Spring Security" />
            <TechnologyIcon technologyName="JWT" />
            <TechnologyIcon technologyIcon technologyName="MySQL" />
            <TechnologyIcon technologyName="Docker" />
            <TechnologyIcon technologyIcon technologyName="Git" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
