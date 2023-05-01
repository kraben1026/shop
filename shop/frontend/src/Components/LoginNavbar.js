import { useNavigate } from "react-router-dom"
import './LoginNavbar.css'
const LoginNavbar = (props) => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
        <div className="title"><h1>Marketplace</h1></div>
      </nav>
  )
}

export default LoginNavbar