// Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    const res = await fetch("/account/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, user_password: password }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      navigate("/");
    } else {
      alert("Signup failed");
    }
  }

  return (
    <form onSubmit={handleSignup}>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button>Sign Up</button>
    </form>
  );
}
