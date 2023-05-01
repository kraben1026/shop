import { useNavigate } from "react-router-dom"
import './navbar.css'
const Navbar = (props) => {
    const navigate = useNavigate();
    const logOut = () =>{
        localStorage.removeItem("token");
        navigate("/")
      }
  return (
    <nav className="navbar">
        <div className="title"><h1>Marketplace</h1></div>
        <button onClick={() => navigate("/sell")} className = "homeBtn">Sell items{props.button}</button>
        <button onClick={() => navigate("/myItems")} className = "homeBtn">My Items</button>
        <button onClick={() => navigate("/")} className = "homeBtn">Logout</button>
        {props.showButton && (
        <button onClick={logOut} className = "homeBtn">Log out</button>
        )}
      </nav>
  )
}

export default Navbar