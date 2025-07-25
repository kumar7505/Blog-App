import React from "react";
import { useState } from "react";
import "./page.css";
import { Navigate } from "react-router-dom";

const registerpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(404);
  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      console.log(response.status);
      alert("registration successful");
    } else {
      console.log("registration failed");
    }
    setStatus(response.status);

  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
      {status === 200 && <Navigate to={"/login"} />}
    </form>
  );
};

export default registerpage;
