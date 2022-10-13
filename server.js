import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("hello word");
});

app.post("/users", (req, res) => {
  const user = req.body.user;

  res.send(user);
});

app.get("/users", (req, res) => {
  res.send("유저 정보 조회.");
});

app.listen(3000, () => {
  console.log("sever start!");
});
