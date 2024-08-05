export const RoadMapItem = ({ title, descriptions, isEven }) => {
  return (
    <div
      className={`roadmap-item ${
        isEven ? "roadmap-item--even" : "roadmap-item--odd"
      }`}
    >
      <div className={`roadmap-item__marker ${
        isEven ? "roadmap-item--even" : "roadmap-item--odd"
      }`}></div>
      <div className="roadmap-item__content">
        <h3 className="roadmap-item__title">{title}</h3>
        <ul className="roadmap-item__descriptions">
          {descriptions.map((description, index) => (
            <li key={index} className="roadmap-item__description">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
