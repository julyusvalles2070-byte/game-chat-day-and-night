import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Game/Chat Day and Night",
    status: "online"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    service: "NightChat"
  });
});

app.get("/game-session", (req, res) => {
  const game = req.query.game || "Unknown Game";

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Night Sky - ${game}</title>
      <style>
        body {
          margin: 0;
          background: #050816;
          color: white;
          font-family: Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
        }

        .box {
          padding: 40px;
          border-radius: 20px;
          background: rgba(20, 25, 60, 0.9);
        }

        h1 {
          font-size: 32px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>🌌 Night Sky</h1>
        <h2>${game}</h2>
        <p>Game session connected successfully.</p>
        <p>Your Night Sky server is ready for the next game-service integration.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`NightChat server running on port ${PORT}`);
});
