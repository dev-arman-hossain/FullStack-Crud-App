import express from "express";
import { userRouter } from "./modules/user.routes";

const app = express();
app.use(express.json());

app.use("/api", userRouter);

export default app;