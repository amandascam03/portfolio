import { Contacts } from "../Contacts/Contacts";
import { Description } from "../Description/Description";
import "./Profile.css";
import profilePic from "../../assets/profile-pic.png"

export const Profile = () => {
  return (
    <div className="profile">
      <picture className="box-pic center">
        <img src={profilePic} alt="foto de perfil" height={"260px"} />
      </picture>
      <Description desc="Front-end Developer" size="15px" />
      <div className="box-contacts center">
        <Contacts />
      </div>
    </div>
  );
};
