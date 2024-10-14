export class User {
  private userId: number = -1;
  private username: string = "";
  private email: string = "";
  private password: string = "";
  private role: string = ""; // 'user' or 'admin'

  constructor(
    userId: number,
    username: string,
    email: string,
    password: string,
    role: string
  ) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  get UserId(): number {
    return this.userId;
  }
  set UserId(userId: number) {
    this.userId = userId;
  }

  get Username(): string {
    return this.username;
  }
  set Username(username: string) {
    this.username = username;
  }

  get Email(): string {
    return this.email;
  }
  set Email(email: string) {
    this.email = email;
  }

  get Password(): string {
    return this.password;
  }
  set Password(password: string) {
    this.password = password;
  }

  get Role(): string {
    return this.role;
  }
  set Role(role: string) {
    this.role = role;
  }
}
