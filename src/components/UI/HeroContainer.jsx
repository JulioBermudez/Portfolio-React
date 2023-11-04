import "../UI/HeroContainer.css"
import Header from "../Header/Header.jsx";
import Avatar from "../Avatar/Avatar.jsx";
import Icons from "../Icons/Icons.jsx";

const HeroContainer = () => {
    const userName = "J.Bermudez";
    const paragraph = " Programing and Design from the Future. Currently creating beautiful stuff in Miami, Florida.";
    const textColor = "white"
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="custom-container-picture-drops">
        <Avatar />
        <div className="col-12 text-center custom-greetings container">
          <h1 className={textColor}>
            Hi, I am <span className="water warning">{userName}</span>
          </h1>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 text-center container">
          <p className="white">
           {paragraph}
          </p>
        </div>
        <Icons/>
      </section>
    </>
  );
};
export default HeroContainer;
