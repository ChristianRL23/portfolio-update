import "./Contact.scss";
import email from "./icon-1.svg";
import linkedin from "./icon-2.svg";
import github from "./GitHub-Mark-120px-plus.png";

const ContactIcon = ({ value, name, icon, link }) => {
  const goToTheLink = (url) => {
    if (url === "email") {
      document.location =
        "mailto:christianramirezlara1@gmail.com?subject=I want to talk to you&body=Hello Christian!";
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="contact-icon">
      <div
        onClick={goToTheLink.bind(null, link)}
        className="contact-icon__icon"
      >
        <img src={icon} alt="Icon" />
      </div>
      <h5 onClick={goToTheLink.bind(null, link)} className="contact-icon__name">
        {name}
      </h5>
      <h6 className="contact-icon__value">{value}</h6>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        Did you like the way I work? Please feel free to contact me and I will
        reply as soon as possible.
      </p>
      <div className="contact__icons">
        <ContactIcon
          name="LinkedIn"
          icon={linkedin}
          value="Christian Uriel Ramírez Lara"
          link="https://www.linkedin.com/in/christianramirezlara"
        />
        <ContactIcon
          name="Email"
          icon={email}
          value="christianramirezlara1@gmail.com"
          link="email"
        />
        <ContactIcon
          name="GitHub"
          value="ChristianRL23"
          icon={github}
          link="https://github.com/ChristianRL23"
        />
      </div>
    </section>
  );
};

export default Contact;
