const path = require("path");
const express = require("express");
const hbs = require("hbs");
const PORT = process.env.PORT || 3001;
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "HBS render...",
    name: "ganc",
  });
});

app.get("/", (req, res) => {
  res.send({ enpoint: ["/", "/api"] });
});

app.get("/api", (req, res) => {
  res.send({ data: [], query: req.query });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "ganc",
    errorMessage: "Page not found.",
  });
});

app.listen(PORT, () => {
  console.log(`server is listen on port ${PORT}`);
});
