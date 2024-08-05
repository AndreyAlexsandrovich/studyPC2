import "../About/About.css";
import about from "../../../../src/assets/Main-img/about__img.png";
export default function About() {
  return (
    <>
      <img src={about} alt="computer" />
      <div className="about-text">
        <h3 className="title-about">Чем мы занимаемся?</h3>
        <p className="description-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque,
          dignissim et feugiat elit augue in suspendisse egestas. Dictum
          vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque,
          adipiscing sapien sem senectus praesent aenean consequat. Aenean
          facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat
          mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id
          elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat
          nisi, lobortis.
        </p>
      </div>
    </>
  );
}
