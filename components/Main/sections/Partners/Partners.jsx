import "./Partners.css";
import partnerLogo from "../../../../src/assets/Main-img/little/logo.png";
const Partners = () => {
  const partnerLogos = [
    partnerLogo,
    partnerLogo,
    partnerLogo,
    partnerLogo,
    partnerLogo,
    partnerLogo,
    partnerLogo,
    partnerLogo,
  ];
  return (
    <>
      <div className="titles__pertners">
        <h4 className="partners__title">Партнеры - топовые бренды</h4>
      </div>
      <div className="partners__box">
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className="partners__line-box">
            {partnerLogos
              .slice(rowIndex * 4, (rowIndex + 1) * 4)
              .map((logo, index) => (
                <div key={index} className="partner">
                  <img
                    src={logo}
                    alt={`partner-logo-${rowIndex * 4 + index}`}
                  />
                </div>
              ))}
          </div>
          
        ))}
      </div>
    </>
  );
};

export default Partners;
