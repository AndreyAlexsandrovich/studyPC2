import "./Profession.css";
export default function Profession() {
  const dataCars = [
    {
      img: "../../../../src/assets/Main-img/little/icon-1.png",
      heading: "Только практическиенавыки в работе",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
    },
    {
        img: "../../../../src/assets/Main-img/little/icon-2.png",
        heading: "Работа на самом современном оборудовании",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
      },
      {
        img: "../../../../src/assets/Main-img/little/icon-3.png",
        heading: "Сертификация по окончании обучения",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
      },
  ];
  return (
    <>
        <h1 className="profession__title">Получите профессию прямо сейчас</h1>
        <div className="flex-container">
            <div className="profession__cars">
                    {dataCars.map((item, index) => ( 
                <div className="profession__car car" key={index}>
                    <img className="car__img" src={item.img} alt="car-img"/>
                        <h6 className="car__title">{item.heading}</h6>
                        <p className="car__description">{item.description}</p>
                </div>
                    ))}
            </div>
        </div>
    </>
  );
}
