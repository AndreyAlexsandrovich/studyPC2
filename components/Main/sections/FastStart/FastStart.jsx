import "../../sections/FastStart/FastStart.css";
import Titles from "./line/Titles/Titles";
import Description from './line/Description/Description';

export default function FastStart() {
  return (
    <>
      <div className="titles">
        <h4 className="fast-start__title">Быстрый старт</h4>
      </div>
      <div className="fast-start__description">
        <p className="fast-start__description-2">
          Больше 90% учеников прошли полный курс и смогли
          <br />
          собрать свой первый компьютер
        </p>
      </div>
      <div className="line-percent">
        <div className="percent_block">
          <Titles />
          <div className="box_line">
            {[...Array(4)].map(( index) => (
              <div key={index} className="percent_block__progress"></div>
            ))}
          </div>
          <Description />
        </div>
      </div>
    </>
  );
}