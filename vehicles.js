import express from "express";
import { getVehicleByNumberPlate } from "../database.js"; // Import database function

const router = express.Router();

// Route to search a vehicle by number plate
router.get("/search", async (req, res) => {
  try {
    const numberPlate = req.query.numberplate;

    if (!numberPlate) {
      return res.status(400).json({ error: "Number plate is required" });
    }

    const vehicle = await getVehicleByNumberPlate(numberPlate);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.json(vehicle);
  } catch (error) {
    console.error("Error in search route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
