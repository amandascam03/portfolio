import "./Contacts.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github-contact.png";
import slack from "../../assets/slack.png";

export const Contacts = () => {
  return (
    <div className="contacts-pic">
      <picture className="center ldin-pic">
        <a
          className="center"
          href="https://www.linkedin.com/in/amanda-araujo03/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" height={"20px"} />
        </a>
      </picture>
      <picture className="center github-pic">
        <a
          className="center"
          href="https://github.com/amandascam03/"
          target="_blank"
        >
          <img src={github} alt="github" height={"36px"} />
        </a>
      </picture>
      <picture className="center slack-pic">
        <a
          className="center"
          href="https://claseslaboratoria.slack.com/team/U0539HNNNER"
          target="_blank"
        >
          <img src={slack} alt="slack" height={"24px"} />
        </a>
      </picture>
    </div>
  );
};
