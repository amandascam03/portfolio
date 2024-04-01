import { PageName } from "../../components/PageName/PageName";
import { Projects } from "../../components/Projects/Projects";
import { Title } from "../../components/Title/Title";


export const Portfolio = () => {
  return (
    <div id="portfolio">
      <section className="portfolio-box">
        <PageName name="Portfolio" />
        <Title titleName="Trabalhos e Projetos" />
        <Projects />
      </section>
    </div>
  );
};
