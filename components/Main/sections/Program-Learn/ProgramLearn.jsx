import "./ProgramLearn.css";
import Img from "../../../../src/assets/Main-img/little/1.png";
import { TimeLine } from "./TimeLine/TimeLine";
export default function ProgramLearn() {
  return (
    <>
      <div className="image-box">
        <img src={Img} alt="logo" />
      </div>
      <div className="ProgramLearn__heading">
        <h1 className="ProgramLearn__title">Программа обучение</h1>
        <p className="fast-start__description-2 center">
          Больше 90% учеников прошли полный курс и смогли <br /> собрать свой
          первый компьютер
        </p>
      </div>
      <TimeLine />
    </>
  );
}
