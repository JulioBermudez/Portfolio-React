import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
// import HeroContainer from "./components/UI/HeroContainer";
// import AboutMeContainer from "./components/UI/AboutMeContainer";
// import MySkillsContainer from "./components/UI/MySkillsContainer.jsx";
// import PortfolioContainer from "./components/UI/PortfolioContainer.jsx";
// import ContactMeContainer from "./components/UI/contactMeContainer.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import $ from "jquery";
window.$ = $;

function App() {
 

  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
