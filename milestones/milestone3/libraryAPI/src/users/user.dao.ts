import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./user.model";
import { userQueries } from "./user.queries";

// Read all users
export const readUsers = async () => {
  return execute<User[]>(userQueries.readUsers, []);
};

// Read a user by ID
export const readUserById = async (userId: number) => {
  return execute<User>(userQueries.readUserById, [userId]);
};

// Read a user by email (for authentication)
export const readUserByEmail = async (email: string) => {
  return execute<User>(userQueries.readUserByEmail, [email]);
};

// Create a new user
export const createUser = async (user: User) => {
  return execute<OkPacket>(userQueries.createUser, [
    user.username,
    user.email,
    user.passwordHash,
    user.role,
  ]);
};

// Update a user's information
export const updateUser = async (user: User) => {
  return execute<OkPacket>(userQueries.updateUser, [
    user.username,
    user.email,
    user.passwordHash,
    user.role,
    user.userId,
  ]);
};

// Delete a user
export const deleteUser = async (userId: number) => {
  return execute<OkPacket>(userQueries.deleteUser, [userId]);
};
