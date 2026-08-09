import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Game/Chat Day and Night",
    status: "online",
    message: "NightChat server is running!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    service: "NightChat"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`NightChat server running on port ${PORT}`);
});
