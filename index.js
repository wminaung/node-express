const express = require("express");
const { homeRouter } = require("./routes/homeRouter");
const { writeFileSync } = require("fs");
const app = express();
app.use(express.json());

const users = [
  { name: "win", password: "win123" },
  { name: "min", password: "min123" },
];

// const auth = (req, res, next) => {
//   const { iname, ipass } = req.body;
//   let isOk = false;
//   users.forEach((user) => {
//     if (user.name === iname && user.password === ipass) {
//       isOk = true;
//     }
//   });

//   if (isOk) {
//     next();
//   } else {
//     res.send("Nope You can't login");
//   }
// };
// app.post("/", (req, res) => {
//   res.send("Hello login");
// });

app.use((req, res, next) => {
  const date = new Date().toUTCString();
  const reqUrl = req.url;
  const method = req.method;
  const log = `${method} - ${reqUrl} | ${date} \n`;
  writeFileSync("./request.log", log, { flag: "a" });
  next();
});

app.use("/home", homeRouter);

app.listen(3000, () => {
  console.log("Server is listen on PORT : 3000");
});
