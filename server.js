import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("hello word");
});

app.listen(3000, () => {
  console.log("sever start!");
});
