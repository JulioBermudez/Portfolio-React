import "../ArticleAbout/ArticleAbout.css"
import DataList from "../../DataList/DataList";
import Button from "../../Button/Button";
import Cv from "../../images/junior full stack web developer.pdf"
const ArticleAbout = () => {
    const Download = "DOWNLOAD RESUME"
  const paragraph =
    " I m a Full Stack web developer who aims to combine the beauty of design with the logical perfection of coding. Training myself every day and pushing my own limits to discover new ways of creating a great experience for the users.";

   
  return (
    <>
      <article className="col-sm-11 col-md-8 col-lg-6 artclMovmnt">
        <h1 className="white mb-3 mt-4">Hi there! I am J. Bermudez</h1>
        <h4 className="warning mb-3">Full Stack Web Developer</h4>

        <p className="white">{paragraph}</p>
        <br />
        <DataList/>
        <br />
        <section className="d-flex flex-wrap justify-content-between">
          <div className="col-sm-6">
            <a href={Cv} download="junior full stack web developer.pdf">
                <Button text={Download}/>
            </a>
            
          </div>
        </section>
      </article>
    </>
  );
};
export default ArticleAbout;
