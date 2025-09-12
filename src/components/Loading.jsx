import { FadeLoader } from "react-spinners";
const Loading = () => {
  return (
<div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // keep it above everything
  }}>
    <FadeLoader color="#1E90FF" />
    </div>
  )
}

export default Loading
