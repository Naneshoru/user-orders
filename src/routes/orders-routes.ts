import { OrdersController } from './../controllers/orders-controller';
import { Router } from 'express';
import { CreateOrder } from '../use-cases/create-order';
import { ListOrders } from '../use-cases/list-orders';
import { OrdersRepository } from '../repositories/orders-repository';
import { UsersRepository } from '../repositories/users-repository';
import { ModifyOrderItems } from '../use-cases/modify-order-items';
import { ModifyOrderStatus } from '../use-cases/modify-order-status';
import { FindOrder } from '../use-cases/find-order';

const ordersRoutes = Router();

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

const createOrder = new CreateOrder(ordersRepository, usersRepository);
const listOrders = new ListOrders(ordersRepository);
const modifyOrderItems = new ModifyOrderItems(ordersRepository);
const modifyOrderStatus = new ModifyOrderStatus(ordersRepository);
const findOrder = new FindOrder(ordersRepository);

const ordersController = new OrdersController(
  createOrder,
  listOrders,
  modifyOrderItems,
  modifyOrderStatus,
  findOrder,
);

ordersRoutes.get('/', (req, res) => {
  ordersController.get(req, res);
});

ordersRoutes.get('/:id', (req, res) => {
  ordersController.find(req, res);
});

ordersRoutes.post('/', (req, res) => {
  ordersController.create(req, res);
});

ordersRoutes.put('/modify-items/:id', (req, res) => {
  ordersController.modifyItems(req, res);
});

ordersRoutes.put('/modify-status/:id', (req, res) => {
  ordersController.modifyStatus(req, res);
});

export default ordersRoutes;
