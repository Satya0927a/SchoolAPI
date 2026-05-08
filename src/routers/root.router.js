import express from "express";
import { addSchool, listSchools, ping } from "../controllers/school.cnt.js";
const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("hello welcome to school API");
});
rootRouter.post("/addSchool", addSchool);
rootRouter.get("/listSchools", listSchools);
// a hack to keep free render instance running 24/7
rootRouter.get("/ping", ping);
export default rootRouter;
