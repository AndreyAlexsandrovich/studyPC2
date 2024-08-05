import "../Header/Header.css";
import "../styles/containers.css";
import Logo from "../../src/assets/Header-img/Vector.png";
import Button from "../Header/Button/Button";
import ButtonDown from "./Button/Button-down/button-down";
import ProgressBar from './Progress-Bar/ProgressBar'
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const dataMenu = [
    { link: "Главная" },
    { link: "Курсы" },
    { link: "Расписание" },
    { link: "Преподаватели" },
    { link: "Рассылка" },
    { link: "Контакты" },
  ];

  const [days, setDays] = useState(0);
  const [chours, setChour] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("augst 30, 2024 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setDays(0);
        setChour(0);
        setMinute(0);
        setSeconds(0);
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setChour(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container-header">
          <div className="flex-container">
            <div className="logo">
              <a href="#!" className="logo-link">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="menu-list">
              <ul className="list">
                {dataMenu.map((item, index) => (
                  <li className="list-item" key={index}>
                    <a href="#!" className="link">
                      {item.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-box">
              <Button>Зайти в кабинет</Button>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="title">
              <h1 className="title-header">
                Первый курс <br />
                по компьютерной сборке
              </h1>
            </div>
            <div className="flex">
              <div className="block">
                <h2 className="time">{days}</h2>
                <p className="desc_time">Дней</p>
              </div>
              <div className="block">
                <h2 className="time">{chours}</h2>
                <p className="desc_time">Часов</p>
              </div>
              <div className="block">
                <h2 className="time">{minutes}</h2>
                <p className="desc_time">Минут</p>
              </div>
              <div className="block">
                <h2 className="time">{seconds}</h2>
                <p className="desc_time">Секунд</p>
              </div>
            </div>
          </div>
          <div className="bridge">
            <div className="container">
              <div className="flex-container">
                <div className="btn-box">
                  <ButtonDown />
                </div>
                <div className="list-result">
                  <ul className="list-student">
                    <li className="item-student">Учеников всего:</li>
                    <p className="number-student">200</p>
                  </ul>
                  <ul className="list-student">
                    <li className="item-student">Успешно закончили</li>
                    <p className="number-student">190</p>
                  </ul>
                </div>
                <ProgressBar />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
