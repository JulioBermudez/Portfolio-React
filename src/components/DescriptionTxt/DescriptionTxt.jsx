/* eslint-disable react/prop-types */
import "../DescriptionTxt/DescriptionTxt.css";
const AboutMeTxt = (props) => {
  return (
    <>
      <article className="col-12 text-center custom-text-title custom-title" id="divAbout">
        <h1 className="warning">
          {props.text}
          <h1 className="shadow-text opacity-25 position-relative">
            {props.text}
          </h1>
        </h1>
      </article>
    </>
  );
};
export default AboutMeTxt;
