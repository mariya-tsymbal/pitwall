import { useEffect, useState } from "react";
import { StandingsTable } from "./components/StandingsTable.js";
import type { ConstructorStanding } from "./types/standings.js";

const API_BASE = import.meta.env.VITE_API_URL ?? "";

export default function App() {
  const [standings, setStandings] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/constructors/standings`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<ConstructorStanding[]>;
      })
      .then((data) => {
        setStandings(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>2025 Constructor Championship</h1>
      {loading && <p>Loading standings...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <StandingsTable standings={standings} />}
    </main>
  );
}
