import express from "express";
import errorhandler from "./middlewares/errorhandler.js";
import rootRouter from "./routers/root.router.js";
const app = express();
app.use(express.json());

app.use("/", rootRouter);
app.use(errorhandler);

export default app;
