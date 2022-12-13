const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.send({ enpoint: ["/", "/hello"] });
});

app.get("/hello", (req, res) => {
  res.send({ data: [], query: req.query });
});

app.listen(PORT, () => {
  console.log(`server is listen on port ${PORT}`);
});
