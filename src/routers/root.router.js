import express from "express";
import { addSchool } from "../controllers/school.cnt.js";
const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("hello welcome to school API");
});
rootRouter.post("/addSchool", addSchool);
export default rootRouter;
