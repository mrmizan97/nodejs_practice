const express = require("express");
const morgan = require("morgan");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");

const app = express();

// app.use(morgan('dev'))

function customMiddleware(req, res, next) {
  if (req.url === "/admin") {
    res.send("<h1>Admin dashboard</h1>");
  }
  console.log("I am logged.");
  next();
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(req.method + " - " + req.url);
    next();
  };
}

// const middleware=[customMiddleware,tinyLogger()]

// app.use(middleware)
// router

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.get("/product", postRouter);


app.get("/contact", (req, res) => {
  res.send("<h1>Contact page!</h1>");
});
app.get("/admin", (req, res) => {
  res.send("<h1>admin page!</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About page!</h1>");
});
app.get("/", (req, res) => {
  // res.send("<h1>Home page!</h1>");
  res.json({
    message: "I am a response",
  });
});
app.get("*", (req, res) => {
  res.send("<h1>404 not found!</h1>");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
