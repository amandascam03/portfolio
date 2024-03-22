import "./Description.css";

interface Props {
  desc: string;
  size: string;
}

export const Description = ({desc, size}: Props) => {

  return (
    <>
    <p className="description" style={{fontSize: size}}>{desc}</p>
    </>
  )
}
