import { Contact } from "../Contact/Contact";
import { Description } from "../Description/Description";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile center">
      <picture className="box-pic center">
        <img src="" alt="foto de perfil" />
      </picture>
      <Description desc="Front-end Developer" size="15px" />
      <div className="box-contact center">
        <Contact imageSrc="" imageAlt="" />
        <Contact imageSrc="" imageAlt="" />
        <Contact imageSrc="" imageAlt="" />
      </div>
    </div>
  );
};
