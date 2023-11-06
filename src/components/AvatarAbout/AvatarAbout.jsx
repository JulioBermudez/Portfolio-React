import avatarAboutImg from "../images/IMG-2859.jpg"
import "../AvatarAbout/AvatarAbout.css"
const AvatarAbout = ()=>{
    return (
        <>
        <picture className="col-sm-12 col-lg-6 d-flex justify-content-center picMovmnt">
              <div className="custom-avatar-img-profile">
                <img src={avatarAboutImg} alt="avatar image" />
              </div>
            </picture>
        </>
    )
}
export default AvatarAbout