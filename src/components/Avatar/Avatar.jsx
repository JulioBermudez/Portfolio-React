import avatarImg from "../images/avatar.png";
import "../Avatar/Avatar.css";
const Avatar = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="custom-avatar m-5">
        <img src={avatarImg} alt="Avatar Image" />
      </div>
    </div>
  );
};
export default Avatar;
