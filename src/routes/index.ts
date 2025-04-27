import usersRoutes from './users-routes.ts'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRoutes)

export default routes