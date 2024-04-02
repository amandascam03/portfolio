import htmlImage from "../assets/HTML.png"
import cssImage from "../assets/CSS.png"
import jsImage from "../assets/Javascript.png"
import tsImage from "../assets/TypeScript.png"
import gitImage from "../assets/git.png"
import githubImage from "..//assets/Github.png"
import reactImage from "../assets/React.png"
import nodeImage from "../assets/Nodejs.png"
import figmaImage from "../assets/Figma.png"
import firebaseImage from "../assets/Firebase.png"
import bootstrapImage from "../assets/bootstrap.png"
import viteImage from "../assets/vite.png"
import jestImage from "../assets/jest.png"
import npmImage from "../assets/npm.png"

interface ISkills {
  name: string;
  img: string;
}

export const skillsData: ISkills[] = [
  {name: "HTML", img: htmlImage},
  {name: "CSS", img: cssImage},
  {name: "Javascript", img: jsImage},
  {name: "Typescript", img: tsImage},
  {name: "React", img: reactImage},
  {name: "Git", img: gitImage},
  {name: "GitHub", img: githubImage},
  {name: "Node.js", img: nodeImage},
  {name: "Figma", img: figmaImage},
  {name: "Firebase", img: firebaseImage},
  {name: "Bootstrap", img: bootstrapImage},
  {name: "Vite.js", img: viteImage},
  {name: "Jest", img: jestImage},
  {name: "npm", img: npmImage}
]
