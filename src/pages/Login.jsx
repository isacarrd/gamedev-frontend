import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault();

    if (email === "user@devflix.com" && password === "123456") {
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }
  }


    return (
      <div className="login-page">
        <form className="login-box" onSubmit={handleLogin}>
          <h1>GAMEFLIX</h1>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
          <p className="login-help">Use: user@devflix.com / 123456</p>
        </form>
      </div>
    );
}

export default Login;
