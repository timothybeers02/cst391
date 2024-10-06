// user.routes.ts

import { Router } from "express";
import * as UserController from "./user.controller";
import { authMiddleware } from "../middleware/auth.middleware"; // You'll need to implement this

const router = Router();

// User registration
router.post("/register", UserController.createUser);

// User login
router.post("/login", UserController.loginUser);

// Get all users (Admin only)
router.get("/users", authMiddleware(), UserController.readUsers);

// Get user profile (Protected route)
router.get("/users/:userId", authMiddleware(), UserController.readUserById);

// Update user profile (Protected route)
router.put("/users/:userId", authMiddleware(), UserController.updateUser);

// Delete user account (Admin only or self-delete)
router.delete("/users/:userId", authMiddleware(), UserController.deleteUser);

export default router;
