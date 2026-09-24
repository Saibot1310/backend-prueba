import { UserService } from "../services/user.service.js";
import { User } from "../types/User.js";

export class UserController {
  constructor(private readonly userService: UserService) {}

  createUser(name: string, email: string): User {
    return this.userService.createUser(name, email);
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }

  getUserById(id: number): User | undefined {
    return this.userService.getUserById(id);
  }

  deleteUser(id: number): boolean {
    return this.userService.deleteUser(id);
  }
}
