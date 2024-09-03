import './CustomButton.scss';

const CustomButton = ({ icon, textContent, theme, link }) => {
  const goToTheLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={() => goToTheLink(link)}
      className={`custom-button--${theme}`}
    >
      <img src={icon} alt="Button icon" />
      <h6>{textContent}</h6>
    </div>
  );
};

export default CustomButton;
