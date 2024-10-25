import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/signup.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement sign-up logic, like validating passwords, handling profile picture upload, etc.
    console.log("Signing up with:", {
      username,
      password,
      confirmPassword,
      profilePicture,
    });
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div className="signup-page-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2 className="form-title">Sign Up</h2>

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

        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="file-input">
          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>

        <button type="submit" className="button">
          Sign Up
        </button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
