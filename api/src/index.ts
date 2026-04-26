import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { constructorsRouter } from "./routes/constructors.js";

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
    allowMethods: ["GET"],
  })
);

app.route("/api/constructors", constructorsRouter);

app.get("/health", (c) => c.json({ status: "ok" }));

const port = Number(process.env.PORT) || 3001;

serve({ fetch: app.fetch, port }, () => {
  console.log(`API running on port ${port}`);
});
