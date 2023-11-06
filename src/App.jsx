import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeroContainer from "./components/UI/HeroContainer";
import AboutMeContainer from "./components/UI/AboutMeContainer";
import MySkillsContainer from "./components/UI/MySkillsContainer.jsx";
import PortfolioContainer from "./components/UI/PortfolioContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <HeroContainer />
      <div className="container-div"></div>
      <AboutMeContainer />
      <div className="container-div"></div>
      <MySkillsContainer/>
      <div className="container-div"></div>
      <PortfolioContainer/>
    </>
  );
}

export default App;
