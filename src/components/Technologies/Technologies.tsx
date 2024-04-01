interface TechnologiesData {
  srcTechImg: string;
  altTech: string;
  techSize: string;
}

export const Technologies = ({srcTechImg, altTech, techSize}: TechnologiesData) => {
  return (
    <>
    <img src={srcTechImg} alt={altTech} style={{height: techSize}} />
    </>
  )
}
