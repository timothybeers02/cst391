export interface User {
  userId: number;
  username: string;
  email: string;
  passwordHash: string;
  role: string; // 'user' or 'admin'
}
