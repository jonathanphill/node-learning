const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler  = require("./middleware/errorHandler");

const { error } = require("console");
const PORT = process.env.PORT || 3500;

// custom middleware lgger
app.use(logger);
// cross origin resource sharing
const whitelist = [
  "https://www.yoursite.com",
  "https://127.0.0.1:5500",
  "http://localhost:3500",
];
const corOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corOptions));

// built-in middleware to handle urlencoded data
//  in other words, form data;
// 'content-type:application/x-www-form-urlencoded'

app.use(express.urlencoded({ extended: false }));

// buil.in middleware for json
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "/public")));
console.log(path.join(__dirname, "/public"));

app.get("^/$|/index(.html)?", (req, res) => {
  //   res.sendFile("./views/index.html", { root:__dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default
});

// Route Handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello World");
  }
);
// chaining route handlers
const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res, next) => {
  console.log("three");
  res.send("Finished!");
};

app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
