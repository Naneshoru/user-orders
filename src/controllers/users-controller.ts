import { User } from "../entities/user"
import { UsersRepository } from "../repositories/users-repository"
import { Request, Response } from "express"

export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  getAllUsers(req: Request, res: Response) {
    const users = this.usersRepository.getAllUsers()
    res.json(users)
  }

  getUserById(req: Request, res: Response) {
    const { id } = req.params
    const user = this.usersRepository.getUserById(id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  }

  createUser(req: Request, res: Response) {
    const { email, password, role } = req.body

    const user = this.usersRepository.addUser(email, password, role)
    res.status(201).json(user)
  }
}