import express from "express";
import { prisma } from "./utils/prisma.js";
import errorhandler from "./middlewares/errorhandler.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey this is satya, welcome to our school management api");
});

app.use(errorhandler);

export default app;
