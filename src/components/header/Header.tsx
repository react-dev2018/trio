import Navbar from "../navbar/Navbar"

const Header = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <div>ComfySloth</div>
      <Navbar />
    </div>
  )
}

export default Header