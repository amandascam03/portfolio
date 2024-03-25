import "./Buttons.css"
import myCV from "../../assets/Amanda_Araujo_CV.pdf";

export const Buttons = () => {
  return (
    <div className="buttons-box">
      <button>
        <a href={myCV} download>Baixar CV &nbsp;<i className="fa-solid fa-file-arrow-down"></i></a>
      </button>
      <button>
        <a href="mailto:amandascam03@gmail.com">Vamos conversar!</a>
      </button>
    </div>
  )
}
