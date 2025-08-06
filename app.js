import express from "express";
import cors from "cors";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://razorpodfrontend-production.up.railway.app",
    ],
  })
);

app.use(express.json());

app.use("/api", productRoutes);

export default app;
