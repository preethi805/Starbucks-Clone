import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SignupSigninWithMockAPI() {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const apiURL = "https://67ece6494387d9117bbb6411.mockapi.io/users";

  // Load all users from MockAPI
  const getUsers = async () => {
    const res = await axios.get(apiURL);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("");

    try {
      if (mode === "signup") {
        // Check if email already exists
        const exists = users.find((u) => u.email === email);
        if (exists) {
          setStatus("Email already registered!");
        } else {
          // Create new user
          await axios.post(apiURL, { name, email, password });
          setStatus("Signup successful! You can now login.");
          setMode("login");
          getUsers(); // refresh user list
        }
      } else {
        // Login
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem("token", user.id); // store user ID as "token"
          setStatus("Login successful! Redirecting...");
          setTimeout(() => (window.location.href = "/"), 1000);
        } else {
          setStatus("Invalid email or password!");
        }
      }
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>{mode === "signup" ? "Sign Up" : "Sign In"}</h2>

      {mode === "signup" && (
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
        </div>
      )}

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ width: "100%", padding: 10 }}
      >
        {loading ? (mode === "signup" ? "Signing Up..." : "Signing In...") : mode === "signup" ? "Sign Up" : "Sign In"}
      </button>

      {status && <p style={{ color: "red", marginTop: 10 }}>{status}</p>}

      <p style={{ marginTop: 10 }}>
        {mode === "login"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <button
          onClick={() => { setMode(mode === "login" ? "signup" : "login"); setStatus(""); }}
          style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}
        >
          {mode === "login" ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
}
