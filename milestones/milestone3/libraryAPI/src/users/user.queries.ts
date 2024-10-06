// user.queries.ts

export const userQueries = {
  // Retrieve all users
  readUsers: `
    SELECT
      id AS userId, username, email, role
    FROM users
  `,

  // Retrieve a user by ID
  readUserById: `
    SELECT
      id AS userId, username, email, role
    FROM users
    WHERE id = ?
  `,

  // Retrieve a user by email (used for login)
  readUserByEmail: `
    SELECT
      id AS userId, username, email, password_hash AS passwordHash, role
    FROM users
    WHERE email = ?
  `,

  // Create a new user
  createUser: `
    INSERT INTO users (username, email, password_hash, role)
    VALUES (?, ?, ?, ?)
  `,

  // Update a user's information
  updateUser: `
    UPDATE users
    SET username = ?, email = ?, password_hash = ?, role = ?
    WHERE id = ?
  `,

  // Delete a user
  deleteUser: `
    DELETE FROM users
    WHERE id = ?
  `,
};
