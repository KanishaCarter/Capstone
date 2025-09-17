import { useEffect, useState } from "react";
import ScentCard from "./ScentCard";

export default function Scents() {
  const [scents, setScents] = useState([]);

  useEffect(() => {
    async function fetchScents() {
      const response = await fetch("/api/scents", { method: "GET" });
      const data = await response.json();
      setScents(data);
    }
    fetchScents();
  }, []);

  return (
    <div>
      <h2>Available Scents</h2>
      <div>
        {scents.map((scent) => (
          <ScentCard key={scent.scent_id} scent={scent} />
        ))}
      </div>
    </div>
  );
}
