import express, { Request, Response } from "express";
import { connectDB } from "./utils/mongodb";
import contactRouter from "./api/routers/Contactrouters";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI as string;

app.use(cors());
app.use(express.json());
app.use("/api", contactRouter);

// Connect to MongoDB
connectDB(MONGO_URI);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;