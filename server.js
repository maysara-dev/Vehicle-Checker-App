import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import vehicleRoutes from "./routes/vehicles.js";
import mysql from "mysql2";
import path from "path";
import { fileURLToPath } from "url"; // Fix for __dirname in ES module

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
dotenv.config();

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html for root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API routes
app.use("/api/vehicles", vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
