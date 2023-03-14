import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userData = { username: username, password: password };
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    if (data.status === 200) {
      navigate("/home");
    } else {
      alert(data);
    }
  };
  return (<>
   <Navbar button="sell items" route = "/sell" showButton = {true}/>
    <div className="container">
      <div className="wrapper">
      <div className="welcome">
        <h3 id="welcome">Welcome!</h3>
        <p id="missedU">Never been here ?</p>
        <p id="pleaseLogin">Please register <a href="" onClick={() => {navigate("/register")}}>here</a> to check items</p>
        </div>
      </div>
      <p>OR</p>
      <div className="loginForm">
        <form action="">
          <p id="usernameTitle">Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p id="passwordTitle">Password</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-wrapper">
            <button id="loginBtn" onClick={loginHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
