import "../UI/ContactMeContainer.css"
import DescriptionTxt from "../DescriptionTxt/DescriptionTxt.jsx";
import Form from "../Form/Form.jsx";
const ContactMeContainer = () => {
  const contactMe = "CONTACT ME";
  return (
    <>
      <DescriptionTxt text={contactMe} />

      <section className="row d-flex justify-content-center custom-margin">
        <div className="col-sm-12 col-lg-9 d-flex flex-wrap justify-content-evenly">
          <Form />
          <section className="col-10 col-sm-10 col-lg-5">
            <h2 className="white">Just Say Hello!</h2>
            <div className="col-12 grey mb-4 mt-5">
              <p>
                Estimates, questions, information? Don t hesitate to contact me.
              </p>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-between white mb-4">
              <i className="fa-solid fa-envelope fa-2xl col-1"></i>
              <h5 className="col-3">Email:</h5>
              <h6 className="col-7 grey">julioph0n3@gmail.com</h6>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-between white mb-4">
              <i className="fa-solid fa-phone fa-2xl col-1"></i>
              <h5 className="col-3">Phone:</h5>
              <h6 className="col-7 grey">+1 754 715 8059</h6>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-between white mb-4">
              <i className="fa-solid fa-location-dot fa-2xl col-1"></i>
              <h5 className="col-3">Location:</h5>
              <h6 className="col-7 grey">
                576 Nw 114th Ave, Fontainebleau, FL 33172
              </h6>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center white mb-4">
              <h5 className="col-12">
                Visit my social profile and get connected
              </h5>

              <div className="col-8 d-flex justify-content-evenly mt-4">
                <div className="col-2 custom-responsive-icons">
                  <a href="https://github.com/JulioBermudez" className="white">
                    <i className="fa-brands fa-github fa-2xl"></i>
                  </a>
                </div>
                <div className="col-2 white custom-responsive-icons">
                  <a
                    href="https://www.linkedin.com/in/julio-bermudez-4b3742251/"
                    className="white"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
                <div className="col-2 white custom-responsive-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=100008852680959&mibextid=LQQJ4d"
                    className="white"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default ContactMeContainer;
