import express from "express";

function main() {
  const PORT = 3005;
  const app = express();

  app.get("/", (req, res) => {
    res.json({ name: "kunal", age: 22 });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();