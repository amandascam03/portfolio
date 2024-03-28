interface TecnologiesData {
  srcTechImg: string;
  altTech: string;
  techSize: string;
}

export const Tecnologies = ({srcTechImg, altTech, techSize}: TecnologiesData) => {
  return (
    <>
    <img src={srcTechImg} alt={altTech} style={{height: techSize}} />
    </>
  )
}
