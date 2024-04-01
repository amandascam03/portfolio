interface titleProp {
  titleName: string;
  titleSize?: string;
}

export const Title = ({titleName, titleSize}: titleProp) => {
  return (
    <>
    <h2 style={{color: "#FFFF", marginTop: "20px", fontSize: titleSize}}>{titleName}</h2>
    </>
  )
}
