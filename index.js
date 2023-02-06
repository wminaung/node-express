const express = require("express");
const { homeRouter } = require("./routes/homeRouter");

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/profile", (req, res) => {
  res.render("profile", { title: "Hey", message: "Hello there!" });
});

app.use("/home", homeRouter);

app.listen(3000, () => {
  console.log("Server is listen in PORT : 3000");
});
