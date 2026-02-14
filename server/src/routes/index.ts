import { Router } from "express";
import * as authController from "../controllers/authController";
import * as contentController from "../controllers/contentController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

// Authentication routes (public)
router.post("/auth/login", authController.login);
router.get("/auth/verify", authController.verifyToken);

// Content routes
// Public route - get content for frontend
router.get("/content", contentController.getContent);

// Protected routes - admin only
router.put("/content", authenticateToken, contentController.updateContent);
router.put(
  "/content/:section",
  authenticateToken,
  contentController.updateSection,
);

export default router;
