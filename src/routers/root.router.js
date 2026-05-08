import express from "express";
import { addSchool, listSchools } from "../controllers/school.cnt.js";
const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("hello welcome to school API");
});
rootRouter.post("/addSchool", addSchool);
rootRouter.get("/listSchools", listSchools);
export default rootRouter;
