import DescriptionTxt from "../DescriptionTxt/DescriptionTxt";
import SkillsBar from "../SkillsBar/SkillsBar";
const MySkillsContainer = () => {
    const mySkillsTxt = "MY SKILLS"
  return (
    <>
      <section className="row" id="skills">
        <DescriptionTxt text={mySkillsTxt}/>
      </section>
      <SkillsBar/>
    </>
  );
};
export default MySkillsContainer;
