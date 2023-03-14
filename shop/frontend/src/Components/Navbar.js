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
        <div className="title"><h1>Market Place</h1></div>
        <button onClick={() => navigate(props.route)} className = "homeBtn">{props.button}</button>
        {props.showButton && (
        <button onClick={logOut} className = "homeBtn">Log out</button>
        )}
      </nav>
  )
}

export default Navbar