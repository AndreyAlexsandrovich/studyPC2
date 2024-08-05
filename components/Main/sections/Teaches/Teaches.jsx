import "./Teaches.css";
import  DataTeaches  from "./DataTeaches";

export const Teaches = () => {
  return (
    <>
      <div className="teaches__box">
        <h6 className="teaches__title">Ваши преподаватели</h6>
      </div>
      <div className="teaches__container">
        {DataTeaches && DataTeaches.length > 0 ? (
        DataTeaches.map((item) => ( 
          <div className="cart-teaches" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h6 className="teaches__name">{item.name}</h6>
            <p className="teaches__description">{item.Description}</p>
            <button className="teaches__btn">Биография</button>
          </div>
        ))
      ) : (
        <p>Нет доступных преподавателей</p>
      )}
      </div>
    </>
  );
};
