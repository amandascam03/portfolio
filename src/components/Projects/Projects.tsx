import { projects } from "../../services/projects.data";
import { Card } from "../../components/Card/Card";
import "./Projects.css"

export const Projects = () => {
  return (
    <div className="projects-box">
    {projects.map((project, index) => (
          <Card
            key={index}
            projectName={project.name}
            projectDescription={project.desc}
            projectTechnologies={project.technologies}
            techName=""
            cardTechSize=""
            projectImage={project.image}
            projectDemo={project.demo}
            projectCode={project.code}
          />
        )).reverse()}
    </div>
  )
}
