import AboutMeTxt from "../AboutMeTxt/AboutMeTxt";
import AvatarAbout from "../AvatarAbout/AvatarAbout";
import ArticleAbout from "./ArticleAbout/ArticleAbout";
const AboutMeContainer = () => {
  return (
    <>
      <section className="row d-flex flex-wrap" id="about">
        <AboutMeTxt />
        <section className="row d-flex justify-content-center custom-section-about">
          <div className="col-sm-12 col-lg-8 d-flex justify-content-evenly flex-wrap custom-container-about-me">
            <AvatarAbout/>
            <ArticleAbout/>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutMeContainer;
