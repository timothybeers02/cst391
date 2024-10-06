import { Request, RequestHandler, Response } from "express";
import { User } from "./user.model";
import * as UserDao from "./user.dao";
import { OkPacket } from "mysql";
// TODO: find import for password hashing

// Read all users (Admin only)
export const readUsers: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await UserDao.readUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("[user.controller][readUsers][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching users",
    });
  }
};

// Read user by ID (Protected route)
export const readUserById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const user = await UserDao.readUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("[user.controller][readUserById][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching the user",
    });
  }
};

// Create a new user (Registration)
export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const passwordHash = password; // TODO: hash password

    const user: User = {
      userId: 0, // Will be set by the database
      username,
      email,
      passwordHash,
      role: "user",
    };

    const result: OkPacket = await UserDao.createUser(user);

    res.status(201).json({
      message: "User created successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("[user.controller][createUser][Error] ", error);
    res.status(500).json({
      message: "There was an error when creating the user",
    });
  }
};

// Update user (Protected route)
export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const { username, email, password, role } = req.body;

    let passwordHash = undefined;
    if (password) {
      passwordHash = password; // TODO: hash password
    }

    const user: User = {
      userId,
      username,
      email,
      passwordHash: passwordHash || "",
      role,
    };

    await UserDao.updateUser(user);

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("[user.controller][updateUser][Error] ", error);
    res.status(500).json({
      message: "There was an error when updating the user",
    });
  }
};

// Delete user (Admin only or self-deletion)
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    await UserDao.deleteUser(userId);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("[user.controller][deleteUser][Error] ", error);
    res.status(500).json({
      message: "There was an error when deleting the user",
    });
  }
};

// User login
export const loginUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await UserDao.readUserByEmail(email);

    if (user && password == user.passwordHash) {
      const token = "secret_key"; // TODO: Implement proper token generation

      res.status(200).json({
        message: "Login successful",
        token,
      });
    } else {
      res.status(401).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error("[user.controller][loginUser][Error] ", error);
    res.status(500).json({
      message: "There was an error during login",
    });
  }
};
