import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import trimMiddleware from "./middlewares/trim.middleware";

import authRoute from "./routes/auth";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(trimMiddleware);
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);

export default app;
