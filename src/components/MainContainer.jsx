import { useState } from "react";
import AboutMeContainer from "./UI/AboutMeContainer";
import PortfolioContainer from "./UI/PortfolioContainer";
import ContactMeContainer from "./UI/ContactMeContainer.jsx";
import HeroContainer from "./UI/HeroContainer";
import MySkills from "./UI/MySkillsContainer";
import NavBar from "./NavBar/NavBar";
import Footer from "./UI/Footer/Footer";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <HeroContainer />;
    }
    if (currentPage === "About") {
      return <AboutMeContainer />;
    }
    if (currentPage === "Portfolio") {
      return <PortfolioContainer />;
    }
    if (currentPage === "Contact") {
      return <ContactMeContainer />;
    }
    if (currentPage === "MySkills") {
      return <MySkills />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}
