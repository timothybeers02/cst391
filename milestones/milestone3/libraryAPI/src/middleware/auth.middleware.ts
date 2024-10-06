import { Request, Response, NextFunction } from "express";

export const authMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (token === "secret_key") {
      // Authentication successful
      next();
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};
