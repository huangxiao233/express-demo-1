const { request } = require("express");
const express = require("express");
const app = new express();
const port = 2000;

app.get("/index", (request, response) => {
  response.send("hello express!");
});

app.listen(port, () => {
  console.log(`${port}`);
});
