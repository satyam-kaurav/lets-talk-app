import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log("Logging in with:", { username, password, rememberMe });
  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Login</h2>
        <input
          type="text"
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember me</label>
        </div>
        <button type="submit" className="button">
          Login
        </button>
        <p className="sign-up-link">
          Don’t have an account? <Link to="/SignUp">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
