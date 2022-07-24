import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors";

import { userRouter } from "./routes/User.js";
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1", userRouter);
