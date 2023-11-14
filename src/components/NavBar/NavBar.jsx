import "../NavBar/NavBar.css";
import Bubble from "../Bubble/Bubble";
import cvPath from "../images/junior full stack web developer.pdf";

// eslint-disable-next-line react/prop-types
function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <header className="row bg-color sticky-top">
        <section className="col-12 d-flex justify-content-center text position-absolute">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-dark-blue">
              <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                  {" "}
                  <Bubble />
                </a>
                <div className="col-md-3 col-lg-4"></div>
                <button
                  className="navbar-toggler custom-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className={
                          currentPage === "Home"
                            ? "nav-link active warning"
                            : "nav-link white "
                        }
                        aria-current="page"
                        href="#home"
                        onClick={() => handlePageChange("Home")}
                      >
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={
                          currentPage === "About"
                            ? "nav-link active warning"
                            : "nav-link white "
                        }
                        aria-current="page"
                        href="#aboutMe"
                        onClick={() => {
                          handlePageChange("About");
                        }}
                      >
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={
                          currentPage === "MySkills"
                            ? "nav-link active warning"
                            : "nav-link white"
                        }
                        aria-current="page"
                        href="#mySkills"
                        onClick={() => handlePageChange("MySkills")}
                      >
                        MY SKILLS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={
                          currentPage === "Portfolio"
                            ? "nav-link active warning"
                            : "nav-link white"
                        }
                        aria-current="page"
                        href="#portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                      >
                        PORTFOLIO
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active white"
                        aria-current="page"
                        href={cvPath}
                      >
                        MY RESUME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active white"
                        aria-current="page"
                        href="#contact"
                        onClick={() => handlePageChange("Contact")}
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}

export default NavBar;
