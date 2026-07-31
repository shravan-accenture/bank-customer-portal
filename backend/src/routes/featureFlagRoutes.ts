import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const filePath = path.join(
  __dirname,
  "..",
  "data",
  "featureFlags.json"
);

// GET Feature Flags
router.get("/", (req, res) => {
  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
});

// UPDATE Feature Flags
router.post("/", (req, res) => {
  fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));

  res.json({
    message: "Feature flags updated successfully",
  });
});

export default router;