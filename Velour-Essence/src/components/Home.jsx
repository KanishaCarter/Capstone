import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [scents, setScents] = useState([]);

  useEffect(() => {
    async function fetchScents() {
      const res = await fetch("/api/scents");
      const data = await res.json();
      setScents(data);
    }
    fetchScents();
  }, []);

  return (
    <div>
      <h1>Welcome to Velour Essence</h1>
      <h2>Available Scents</h2>
      <ul>
        {scents.map(scent => (
          <li key={scent.scent_id}>
            <Link to={`/scents/${scent.scent_id}`}>{scent.scent_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
