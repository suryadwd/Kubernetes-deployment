const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Backend 🚀");
});

app.get("/api", (req, res) => {
  res.json({ message: "Backend API working" });
});

app.listen(7000, () => {
  console.log("Backend running on port 7000");
});

