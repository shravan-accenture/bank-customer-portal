import express from "express";
import cors from "cors";
import featureFlagRoutes from "./routes/featureFlagRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Register the routes
app.use("/feature-flags", featureFlagRoutes);

export default app;