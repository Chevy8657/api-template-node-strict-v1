import express from "express";
import { transform } from "./core";

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/v1/transform", (req, res) => {
  const text = typeof req.body?.text === "string" ? req.body.text : "";
  res.status(200).json({ result: transform(text) });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
