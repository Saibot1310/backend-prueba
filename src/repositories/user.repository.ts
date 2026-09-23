import { User } from "../types/User.js";


export class UserRepository {
  private users: User[] = [];
  private nextId = 1;

  create(name: string, email: string): User {
    const user: User = {
      id: this.nextId++,
      name,
      email,
    };

    this.users.push(user);

    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  deleteById(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      return false;
    }

    this.users.splice(index, 1);
    return true;
  }
}