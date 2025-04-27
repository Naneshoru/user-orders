import { UsersController } from './../controllers/users-controller';
import { Router } from "express"
import { UsersRepository } from "../repositories/users-repository"

const userRoutes = Router()

const usersRepository = new UsersRepository()
const usersController = new UsersController(usersRepository)

userRoutes.get('/', (req, res) => {
  usersController.getAllUsers(req, res)
})

userRoutes.get('/:id', (req, res) => {
  usersController.getUserById(req, res)
})

export default userRoutes