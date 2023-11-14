import "../UI/AboutMeContainer.css"
import DescriptionTxt from "../DescriptionTxt/DescriptionTxt";
import AvatarAbout from "../AvatarAbout/AvatarAbout";
import ArticleAbout from "./ArticleAbout/ArticleAbout";
const AboutMeContainer = () => {
    const aboutMeTxt = "ABOUT ME"
  return (
    <>
      <section className="row d-flex flex-wrap" id="about">
      <div className="customDiv"></div>
        <DescriptionTxt text={aboutMeTxt}/>
        <section className="row d-flex justify-content-center">
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
