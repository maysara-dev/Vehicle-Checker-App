import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise(); 

export async function getVehicles() {
    const [rows] = await pool.query("SELECT * FROM Vehicles");
    return rows;
}
export async function getVehicleByNumberPlate(NumberPlate) {
    try {
        const [rows] = await pool.query("SELECT * FROM Vehicles WHERE NumberPlate = ?", [NumberPlate]);
        return rows[0]; // NumberPlate is unique, so we return the first result
    } catch (err) {
        console.error("Error fetching vehicle:", err);
        throw err;
    }
}

// Test connection
(async () => {
    try {
        const [result] = await pool.query("SELECT 1 + 1 AS test");
        console.log("Database connected:", result[0].test === 2);
    } catch (err) {
        console.error("Database connection failed:", err);
    }
})();
