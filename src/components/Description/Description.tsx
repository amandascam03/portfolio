import "./Description.css";

interface Props {
  desc: string;
  size: string;
  descHeight?: string;
}

export const Description = ({desc, size, descHeight}: Props) => {

  return (
    <>
    <p className="description" style={{fontSize: size, height: descHeight}}>{desc}</p>
    </>
  )
}
