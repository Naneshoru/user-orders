import { Router } from "express"
import { UsersRepository } from "../repositories/users-repository"

const userRoutes = Router()

userRoutes.get('/', (req, res) => {
  const users = new UsersRepository().getAllUsers()
  res.json(users)
})

export default userRoutes