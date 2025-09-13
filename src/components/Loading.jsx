import { FadeLoader } from "react-spinners";
const Loading = () => {
  return (
<div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  }}>
    <FadeLoader color=" #315e8c" />
    </div>
  )
}

export default Loading
