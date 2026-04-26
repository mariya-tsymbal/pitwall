import { Hono } from "hono";

type JolpicaStanding = {
  position: string;
  points: string;
  wins: string;
  Constructor: {
    constructorId: string;
    name: string;
    nationality: string;
  };
};

type JolpicaResponse = {
  MRData: {
    StandingsTable: {
      StandingsLists: Array<{
        ConstructorStandings: JolpicaStanding[];
      }>;
    };
  };
};

export type ConstructorStanding = {
  position: number;
  name: string;
  nationality: string;
  points: number;
  wins: number;
};

export const constructorsRouter = new Hono();

constructorsRouter.get("/standings", async (c) => {
  const response = await fetch(
    "https://api.jolpi.ca/ergast/f1/2025/constructorstandings.json"
  );

  if (!response.ok) {
    return c.json({ error: "Failed to fetch standings from Jolpica" }, 502);
  }

  const data = (await response.json()) as JolpicaResponse;

  const raw =
    data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings ?? [];

  const standings: ConstructorStanding[] = raw.map((entry) => ({
    position: Number(entry.position),
    name: entry.Constructor.name,
    nationality: entry.Constructor.nationality,
    points: Number(entry.points),
    wins: Number(entry.wins),
  }));

  return c.json(standings);
});
