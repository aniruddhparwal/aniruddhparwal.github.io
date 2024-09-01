import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1712") {
      // Replace '1234' with your desired PIN
      onLogin();
    } else {
      setError("Invalid PIN. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Enter PIN</h2>
        <div className="formData">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter 4-digit PIN"
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
