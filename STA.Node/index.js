const express = require("express");
var cors = require("cors");

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! " + process.env.APP_ENV);
});

app.post("/test", (req, res) => {
  req.body; // JavaScript object containing the parse JSON
  res.json(req.body);
});

app.listen(port, () => {
  console.log(
    `Example ${process.env.APP_ENV} app listening at http://localhost:${port}`
  );
});
