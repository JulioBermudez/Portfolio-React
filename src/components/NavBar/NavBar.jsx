import "../NavBar/NavBar.css"
import Bubble from "../Bubble/Bubble";
const NavBar = () => {
  return (
    <header className="row sticky-top bg-color">
      <section className="col-12 d-flex justify-content-center text position-absolute">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-dark-blue">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
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
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active white"
                      aria-current="page"
                      href="#"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active white warning"
                      aria-current="page"
                      href="#"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active white"
                      aria-current="page"
                      href="#"
                    >
                      MY SKILLS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active white"
                      aria-current="page"
                      href="#"
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active white"
                      aria-current="page"
                      href="#"
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
  );
};

export default NavBar;
