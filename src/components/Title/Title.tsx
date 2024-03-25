interface titleProp {
  titleName: string;
}

export const Title = ({titleName}: titleProp) => {
  return (
    <>
    <h2 style={{color: "#FFFF", marginTop: "20px"}}>{titleName}</h2>
    </>
  )
}
