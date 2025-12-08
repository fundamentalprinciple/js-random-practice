import express from "express";
const app = express();
const port = 8000;


app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
  console.log(req);
});

app.put("/user/prince", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/prince", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/prince", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
