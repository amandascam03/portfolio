import "./PageName.css"

interface NameOfPage {
  name: string;
}

export const PageName = ({name}: NameOfPage) => {
  return (
    <div className="page-name center">
    <h4>{name}</h4>
  </div>
  )
}
