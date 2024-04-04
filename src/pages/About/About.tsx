import { Buttons } from "../../components/Buttons/Buttons";
import { Description } from "../../components/Description/Description";
import { PageName } from "../../components/PageName/PageName";
import { Profile } from "../../components/Profile/Profile";
import { Title } from "../../components/Title/Title";
import "./About.css"

export const About = () => {
  return (
    <div id="about">
      <Profile />
      <section className="about-box">
        <PageName name="Sobre mim" />
        <Title titleName="Amanda Araujo" />
        <Description
          desc="Prazer! Sou Desenvolvedora Front-end graduada pela Laboratoria.
          Atualmente cursando Análise e Desenvolvimento de Sistemas
          pela Descomplica Faculdade Digital. Interesses em
          desenvolvimento Front-end com JavaScript, React JS e
          Typescript."
          size="1em"
        />
         <Buttons />
      </section>
    </div>
  );
};
