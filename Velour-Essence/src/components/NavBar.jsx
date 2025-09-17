import { Link } from "react-router-dom";

export default function NavBar({ user, onLogout }) {
  return (
    <nav>
      <Link to="/" style={{ margin: "15px" }}>Home</Link>
      <Link to="/scents" style={{ margin: "15px" }}>Scents</Link>
      <Link to="/cart" style={{ margin: "15px" }}>Cart</Link>
      {user ? (
        <>
          <Link to="/account" style={{ marginRight: "15px" }}>Account</Link>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}
