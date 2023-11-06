import "../UI/PortfolioContainer.css"
import DescriptionTxt from "../DescriptionTxt/DescriptionTxt.jsx";
import projectImg from "../images/movemate.png"
const PortfolioContainer = () => {
  const portfolioTxt = "PORTFOLIO";
  return (
    <>
      <section className="row position-relative" id="portfolio">
        <DescriptionTxt text={portfolioTxt} />

        <section className="row d-flex justify-content-center">
          <article className="col-sm-12 col-lg-9 d-flex justify-content-center justify-content-evenly flex-wrap custom-portfolio">
            <div className="col-10 col-sm-10 col-lg-12 d-flex justify-content-center custom-movement-div">
              <a className="custom-a" href="https://movemate-rt-f78ed739ac18.herokuapp.com/">
                <img
                  src={projectImg}
                  className="position-relative "
                  alt=""
                />
              </a>
              <section className="position-absolute d-none">
                <h3>Coming soon</h3>
              </section>
            </div>
            <div className="col-10 col-sm-10 col-lg-4 d-flex justify-content-center custom-movement-div">
              <img
                src="https://elements-cover-images-0.imgix.net/265ee29e-2b82-4e71-94e6-fd545ccabe14?auto=compress%2Cformat&fit=max&w=1370&s=b1bec7556a644f7bfe01cd51b305de9b"
                alt=""
              />
              <section className="position-absolute">
                <h3>Coming soon</h3>
              </section>
            </div>
            <div className="col-10 col-sm-10 col-lg-7 d-flex justify-content-center custom-movement-div">
              <img
                src="https://elements-cover-images-0.imgix.net/1e33719b-4f0e-403f-929a-108c81070efd?auto=compress%2Cformat&fit=max&w=1370&s=a3ab018d07e59ba4220ef7d89041369c"
                alt=""
              />
              <section className="position-absolute">
                <h3>Coming soon</h3>
              </section>
            </div>
            <div className="col-10 col-sm-10 col-lg-7 d-flex justify-content-center custom-movement-div">
              <img
                src="https://elements-cover-images-0.imgix.net/ece070d5-ca62-424f-a5cf-309eb2419474?auto=compress%2Cformat&fit=max&w=1370&s=6492562f29b6971c5031df85b5eb85ab"
                alt=""
              />
              <section className="position-absolute">
                <h3>Coming soon</h3>
              </section>
            </div>
            <div className="col-10 col-sm-10 col-lg-4 d-flex justify-content-center custom-movement-div">
              <img
                src="https://elements-cover-images-0.imgix.net/70266ea4-4eee-4566-b4c5-2cce1b593bc8?auto=compress%2Cformat&fit=max&w=1370&s=78ad857fb00785ebcc263a18230bedb2"
                alt=""
              />
              <section className="position-absolute">
                <h3>Coming soon</h3>
              </section>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
export default PortfolioContainer;
