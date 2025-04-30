import { OrdersController } from './../controllers/orders-controller';
import { Router } from 'express';
import { 
  CreateOrder,
  ListOrders,
  ModifyOrderItems,
  ModifyOrderStatus,
  FindOrder,
  CancelOrder
} from '../use-cases/orders';
import { 
  OrdersRepository,
  UsersRepository
} from '../repositories';

const ordersRoutes = Router();

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

const createOrder = new CreateOrder(ordersRepository, usersRepository);
const listOrders = new ListOrders(ordersRepository);
const modifyOrderItems = new ModifyOrderItems(ordersRepository);
const modifyOrderStatus = new ModifyOrderStatus(ordersRepository);
const findOrder = new FindOrder(ordersRepository);
const cancelOrder = new CancelOrder(ordersRepository);

const ordersController = new OrdersController(
  createOrder,
  listOrders,
  modifyOrderItems,
  modifyOrderStatus,
  findOrder,
  cancelOrder
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

ordersRoutes.delete('/:id', (req, res) => {
  ordersController.cancel(req, res);
});

export default ordersRoutes;
