import { OrdersController } from './../controllers/orders-controller';
import { Router } from "express"
import { CreateOrder } from '../use-cases/create-order';
import { ListOrders } from '../use-cases/list-orders';
import { OrdersRepository } from '../repositories/orders-repository';
import { UsersRepository } from '../repositories/users-repository';

const ordersRoutes = Router()

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

const createOrder = new CreateOrder(ordersRepository, usersRepository)
const listOrders = new ListOrders(ordersRepository)

const ordersController = new OrdersController(createOrder, listOrders)

ordersRoutes.get('/', (req, res) => {
  ordersController.get(req, res)
})

ordersRoutes.post('/', (req, res) => {
  ordersController.create(req, res)
})

export default ordersRoutes