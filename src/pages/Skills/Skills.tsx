import { Description } from "../../components/Description/Description"
import { PageName } from "../../components/PageName/PageName"
import { Technologies } from "../../components/Technologies/Technologies"
import { Title } from "../../components/Title/Title"
import { skillsData } from "../../services/skills.data"
import "./Skills.css"

export const Skills = () => {
  return (
    <div id="skills">
      <section className="skills-box">
        <PageName name="Skills" />
        <Title titleName="Tecnologias e Habilidades" />
        <Description desc="Techs que uso no dia a dia e já utilizei em projetos" size="1em" />
        <ul className="skills-list center">
          {skillsData.map((skill, index) =>
          <li key={index}>
            <Technologies srcTechImg={skill.img} altTech={skill.name} techSize="44px" />
          </li>)}
        </ul>
      </section>
    </div>
  )
}

