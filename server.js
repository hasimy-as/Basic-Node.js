const express = require("express");
const app = express();
const port = 8080;

//settings
app.set("view engine", "ejs");
app.use(express.static("public"));

//render & port
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server in localhost:${port}`);
});
