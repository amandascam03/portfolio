import { skillsData } from "./skills.data";
import creditCard from "../assets/cc-thumb.jpg"
import dataLovers from "../assets/dl-thumb.png"
import socialNetwork from "../assets/sn-thumb.png"
import mdLinks from "../assets/mdlinks-thumb.png"
import labNotes from "../assets/ln-thumb.png"
import Zozoz from "../assets/zstudio-thumb.png"

export const projects = [
  {
    image: creditCard,
    name: "Card Validation",
    desc: "Minha primeira aplicação desenvolvida para validar um cartão de crédito a partir de seus dígitos.",
    technologies: [
      skillsData.find(skill => skill.name === "HTML") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "CSS") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Javascript") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Git") ?? { name: "", img: "" }
    ],
    demo: "https://amandascam03.github.io/SAP010-card-validation/",
    code: "https://github.com/amandascam03/SAP010-card-validation"
  },
  {
    image: dataLovers,
    name: "Data Lovers",
    desc: "Uma página web que permite visualizar dados de tarô, filtrar, ordenar e obter cálculos agregados.",
    technologies: [
      skillsData.find(skill => skill.name === "HTML") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "CSS") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Javascript") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Jest") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Git") ?? { name: "", img: "" }
    ],
    demo: "https://camilaverso.github.io/SAP010-data-lovers/",
    code: "https://github.com/amandascam03/SAP010-data-lovers"
  },
  {
    image: socialNetwork,
    name: "Social Network",
    desc: "Uma aplicação de rede social onde é possível fazer cadastro, postagens, deletar e editar posts.",
    technologies: [
      skillsData.find(skill => skill.name === "HTML") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "CSS") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Javascript") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Firebase") ?? {name: "", img: ""},
      skillsData.find(skill => skill.name === "Git") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Jest") ?? { name: "", img: "" }
    ],
    demo: "https://fight-back-3c119.web.app/",
    code: "https://github.com/amandascam03/SAP010-social-network"
  },
  {
    image: mdLinks,
    name: "Md Links",
    desc: "Uma biblioteca para ler e analisar arquivos Markdown, encontrar links e mostrar estatísticas relevantes dos links encontrados.",
    technologies: [
      skillsData.find(skill => skill.name === "Javascript") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Node.js") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Git") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "npm") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Jest") ?? { name: "", img: "" }
    ],
    demo: "https://www.npmjs.com/package/md-links-mnds",
    code: "https://github.com/amandascam03/SAP010-md-links"
  },
  {
    image: labNotes,
    name: "Notes",
    desc: "Aplicação de uma plataforma para tomar notas onde é possível acessar com cadastro, podendo criar, editar e deletar notas.",
    technologies: [
      skillsData.find(skill => skill.name === "HTML") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "CSS") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Javascript") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "React") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Git") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Firebase") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Jest") ?? { name: "", img: "" }
    ],
    demo: "https://labnotes010.vercel.app/",
    code: "https://github.com/amandascam03/SAP010-notes"
  },
  {
    image: Zozoz,
    name: "Zozoz Studio",
    desc: "Aplicação freelance de uma página de salão de unhas para agendamento e divulgação de trabalho.",
    technologies: [
      skillsData.find(skill => skill.name === "HTML") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "CSS") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Javascript") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "React") ?? { name: "", img: "" },
      skillsData.find(skill => skill.name === "Git") ?? { name: "", img: "" },
    ],
    demo: "",
    code: "https://github.com/amandascam03/zozoz"
  }
];
