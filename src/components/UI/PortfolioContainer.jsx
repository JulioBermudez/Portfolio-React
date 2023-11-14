import "../UI/PortfolioContainer.css";
import DescriptionTxt from "../DescriptionTxt/DescriptionTxt.jsx";
import projectImg from "../images/movemate.png";
import foodiePalImg from "../images/PHOTO-2023-08-01-00-24-01.jpg";
const PortfolioContainer = () => {
  const portfolioTxt = "PORTFOLIO";

  const cards = [
    {
      name: "MoveMate",
      classConfig:
        "col-lg-12",
      path: projectImg,
      aPath: "https://movemate-rt-f78ed739ac18.herokuapp.com/",
      aClass: "custom-a",
      comingSoon: ""
    },
    {
      name:"FoodiePal",
      classConfig:
        "col-lg-4",
      path: foodiePalImg,
      aPath: "https://juliobermudez.github.io/FoodiePal/",
      aClass: "custom-a",
      comingSoon: ""
    },
    {
      name:"undefined1",
      classConfig:
        "col-lg-7",
      path: "https://elements-cover-images-0.imgix.net/1e33719b-4f0e-403f-929a-108c81070efd?auto=compress%2Cformat&fit=max&w=1370&s=a3ab018d07e59ba4220ef7d89041369c",
      aPath: " ",
      aClass: "custom-a",
      comingSoon: "Coming Soon"
    },
    {
      name:"undefined2",
      classConfig:
        "col-lg-7",
      path: "https://elements-cover-images-0.imgix.net/ece070d5-ca62-424f-a5cf-309eb2419474?auto=compress%2Cformat&fit=max&w=1370&s=6492562f29b6971c5031df85b5eb85ab",
      aPath: " ",
      aClass: "custom-a",
      comingSoon: "Coming Soon"
    },
    {
      name:"undefined3",
      classConfig:
        "col-lg-4",
      path: "https://elements-cover-images-0.imgix.net/70266ea4-4eee-4566-b4c5-2cce1b593bc8?auto=compress%2Cformat&fit=max&w=1370&s=78ad857fb00785ebcc263a18230bedb2",
      aPath: " ",
      aClass: "custom-a",
      comingSoon: "Coming Soon"
    },
  ];

  return (
    <>
      <section className="row position-relative" id="portfolio">
        <div className="customDiv"></div>
        <DescriptionTxt text={portfolioTxt} />

        <section className="row d-flex justify-content-center">
          <article className="col-sm-12 col-lg-9 d-flex justify-content-center justify-content-evenly flex-wrap custom-portfolio">
            {cards.map(({ name,classConfig, path, aPath,aClass,comingSoon }) => {
              return (
                <>
                  <div className={`col-10 col-sm-10 ${classConfig} d-flex justify-content-center custom-movement-div`} key={name}>
                    <a className={aClass} href={aPath}>
                      <img src={path} className="position-relative " alt="" />
                    </a>
                    <section className="position-absolute">
                      <h3>{comingSoon}</h3>
                    </section>
                  </div>
                </>
              );
            })}
          </article>
        </section>
      </section>
    </>
  );
};
export default PortfolioContainer;
