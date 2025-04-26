import { User } from "../entities/user.ts";

export class UsersRepository {
  private users: User[] = [];

  constructor() {
    this.users = [
      new User({ password: 'John Doe', email: 'jhon@doe.com', role: 'customer' }),
      new User ({ password: 'Jane Smith', email: 'jane@smith.com', role: 'customer' }),
    ];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }

  addUser(email: string, password: string, role: 'admin' | 'customer') {
    const newUser = { id: (this.users.length + 1).toString(), email, password, role };
    this.users.push(newUser);
    return newUser;
  }
}