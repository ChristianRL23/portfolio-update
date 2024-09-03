import Button from "../../components/Button/Button";
import "./Hero.scss";

const Hero = () => {
  const openPDF = () => {
    window.open("/ChristianUrielRamirezLaraCV.pdf");
  };

  return (
    <header className="hero">
      <div className="hero__title">
        <h1 className="hero__title-name">Christian Uriel Ramírez Lara</h1>
        <h2 className="hero__title-role">Java & JavaScript Developer</h2>
        <Button onClick={openPDF} textContent="Download CV" />
      </div>
    </header>
  );
};

export default Hero;
