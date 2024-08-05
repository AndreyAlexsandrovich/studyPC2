import "../TimeLine/TimeLine.css";
import { RoadMapItem } from "./RoadMapItem";
import dataTimeLineLearn from "./dataTimeLineLearn";
export const TimeLine = () => {
  return (
    <>
      <div className="roadmap__timeline">
        <div className="roadmap__line"></div>
        {dataTimeLineLearn.map((item, index) => (
          <RoadMapItem
            key={item.id}
            title={item.title}
            descriptions={item.description}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </>
  );
};
