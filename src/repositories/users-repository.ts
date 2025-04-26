import { User } from "../entities/user.ts";

export class UsersRepository {
  private users: User[] = [];

  constructor() {
    this.users = [
      new User({ name: 'John Doe', email: 'jhon@doe.com' }),
      new User ({ name: 'Jane Smith', email: 'jane@smith.com' }),
    ];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }

  addUser(name: string, email: string) {
    const newUser = { id: (this.users.length + 1).toString(), name, email };
    this.users.push(newUser);
    return newUser;
  }
}