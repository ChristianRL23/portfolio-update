import "./TechnologyIcon.scss";

const TechnologyIcon = ({ technologyName }) => {
  return (
    <div className="technology">
      <h6 className="technology__name">{technologyName}</h6>
    </div>
  );
};
export default TechnologyIcon;
