import { UserRepository } from "../repositories/user.repository.js";
import { User } from "../types/User.js";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(name: string, email: string): User {
    return this.userRepository.create(name, email);
  }

  getUsers(): User[] {
    return this.userRepository.findAll();
  }

  getUserById(id: number): User | undefined {
    return this.userRepository.findById(id);
  }

  deleteUser(id: number): boolean {
    return this.userRepository.deleteById(id);
  }
}