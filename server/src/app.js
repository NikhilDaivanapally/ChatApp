import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import path from 'path'
import { fileURLToPath } from "url";

// Resolving dirname for Es module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(
  cors({
    // origin: "*",
    origin: ["http://localhost:5173", "http://100.104.156.141:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

// use the client app
app.use(express.static(path.join(__dirname, '/client/dist')))

// Render client for any path
app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
})

export { app };
