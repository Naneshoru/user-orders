import ordersRoutes from './orders-routes.ts'
import usersRoutes from './users-routes.ts'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/orders', ordersRoutes)

export default routes