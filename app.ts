const { request } = require("express");
import express from "express";
const app = new (express as any)();
const port = 2000;
//额外
app.get("/index", function (request: any, response: any) {
  response.send("hell express!");
});

app.listen(port, () => {
  console.log(`${port}`);
});
