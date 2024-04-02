import { Description } from "../Description/Description";
import { Technologies } from "../Technologies/Technologies";
import { Title } from "../Title/Title";
import "./Card.css";

interface ProjectCard {
  projectName: string;
  projectDescription: string;
  projectTechnologies: {
    name: string;
    img: string;
  }[];
  techName: string;
  cardTechSize: string;
  projectImage: string;
  projectDemo: string;
  projectCode: string;
}

export const Card = ({
  projectName,
  projectDescription,
  projectTechnologies,
  projectImage,
  projectDemo,
  projectCode
}: ProjectCard) => {

  return (
    <div className="card-box">
      <picture>
        <img src={projectImage} alt="project image" width={"100px"} />
      </picture>
      <Title titleName={projectName} titleSize="1.17em" />
      <Description desc={projectDescription} size="14px" descHeight="90px" />
      <div className="technologies">
        <ul className="tech-list">
          {projectTechnologies.map((skill, index) =>
          <li key={index}>
            <Technologies srcTechImg={skill.img} altTech={skill.name} techSize="24px" />
          </li>)}
        </ul>
      </div>
      <div className="card-btns">
        <button><a target="_blank" href={projectDemo}>Deploy</a></button>
        <button><a target="_blank" href={projectCode}>Code</a></button>
      </div>
    </div>
  );
};
