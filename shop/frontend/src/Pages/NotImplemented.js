import "./notImplemented.css";
import { useNavigate } from "react-router-dom";

const NotImplemented = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div id="notImplemented">{`NOT IMPLEMENTED YET :(`}</div>
    <button onClick={() => navigate("/")}>Back</button>
    </div>
  )
}

export default NotImplemented