import express from "express";
import cors from "cors";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", productRoutes);

export default app;
