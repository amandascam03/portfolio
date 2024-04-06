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
          desc="Pode me chamar de Amanda, prazer! Sou Desenvolvedora Front-end graduada pela Laboratoria.
          Fique à vontade para ver meus projetos e skills e entrar em contato
          para compartilharmos conhecimento ou trocar ideias!"
          size="1em"
        />
         <Buttons />
      </section>
    </div>
  );
};
