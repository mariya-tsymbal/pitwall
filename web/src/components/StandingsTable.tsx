import type { ConstructorStanding } from "../types/standings.js";

type Props = {
  standings: ConstructorStanding[];
};

export function StandingsTable({ standings }: Props) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "640px" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #333", textAlign: "left" }}>
          <th style={{ padding: "0.5rem 1rem" }}>Pos</th>
          <th style={{ padding: "0.5rem 1rem" }}>Constructor</th>
          <th style={{ padding: "0.5rem 1rem" }}>Nationality</th>
          <th style={{ padding: "0.5rem 1rem" }}>Points</th>
          <th style={{ padding: "0.5rem 1rem" }}>Wins</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((row) => (
          <tr key={row.position} style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>{row.position}</td>
            <td style={{ padding: "0.5rem 1rem" }}>{row.name}</td>
            <td style={{ padding: "0.5rem 1rem" }}>{row.nationality}</td>
            <td style={{ padding: "0.5rem 1rem" }}>{row.points}</td>
            <td style={{ padding: "0.5rem 1rem" }}>{row.wins}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
