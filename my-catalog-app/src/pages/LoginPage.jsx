import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Enter email and password");
    onLogin({ email });
  };

  return (
    <div className="login-screen">
      <div className="login-box">

        {/* Lock Icon */}
        <img src="/lock.svg" alt="logo" className="login-logo" />

        <h2>Sign in</h2>

        <form onSubmit={submit} className="login-form">
          <input
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        {/* ---- Added bottom links EXACTLY like screenshot ---- */}
        <div className="login-links">
          <a href="#" className="forgot-link">Forgot password?</a>
          <a href="#" className="signup-link">
            Don't have an account? <strong>Sign Up</strong>
          </a>
        </div>

      </div>
    </div>
  );
}
