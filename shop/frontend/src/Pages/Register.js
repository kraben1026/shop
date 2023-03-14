import { useState } from "react";
import Navbar from "../Components/Navbar";
import './register.css';
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  return (<>
    <Navbar button="Login" route = "/"/>
    <div className="registerWrapper">
      <form action="" className="registerForm">
        <p id="registerUsernameTitle">Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <p id="registerEmailTitle">Email</p>
         <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p id="registerPasswordTitle">Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <p id="registerPasswordTitle">Password again</p>
        <input
          type="password"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <div className="button-wrapper">
          <button id="loginBtn">Register</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Register;
