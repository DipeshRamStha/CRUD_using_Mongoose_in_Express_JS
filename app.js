import express from "express";
import connectDB from "./db/connectdb.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// Static Files
app.use(express.static(join(process.cwd(), "public")));

// Listening the connection in the 3000 PORT
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
