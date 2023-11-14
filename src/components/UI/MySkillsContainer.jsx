import DescriptionTxt from "../DescriptionTxt/DescriptionTxt";
import SkillsBar from "../SkillsBar/SkillsBar";
const MySkillsContainer = () => {
    const mySkillsTxt = "MY SKILLS"
  return (
    <>
      <section className="row" id="skills">
        <div className="customDiv"></div>
        <DescriptionTxt text={mySkillsTxt}/>
      </section>
      <SkillsBar/>
    </>
  );
};
export default MySkillsContainer;
