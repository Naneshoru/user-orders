import { Request, Response } from 'express';
import { CreateOrder } from '../use-cases/create-order';
import { ListOrders } from '../use-cases/list-orders';
import { CreateOrderDTO } from '../dtos/create-order-dto';
import { ModifyOrderItems } from '../use-cases/modify-order-items';
import { ModifyOrderStatus } from '../use-cases/modify-order-status';
import { ModifyOrderItemsDTO } from '../dtos/modify-order-items-dto';
import { ModifyOrderStatusDTO } from '../dtos/modify-order-status-dto';
import { FindOrder } from '../use-cases/find-order';
import { CancelOrder } from '../use-cases/cancel-order';

export class OrdersController {
  constructor(
    private createOrder: CreateOrder,
    private listOrders: ListOrders,
    private modifyOrderItems: ModifyOrderItems,
    private modifyOrderStatus: ModifyOrderStatus,
    private findOrder: FindOrder,
    private cancelOrder: CancelOrder
  ) {}

  async get(req: Request, res: Response) {
    const orders = await this.listOrders.execute();
    res.json(orders);
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'ID não informado' });
    }

    try {
      const order = await this.findOrder.execute(id);    
      
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    const { customer_id, items, status } = req.body;

    if (!customer_id || !items || !status) {
      return res
        .status(400)
        .json({ error: 'Campos obrigatórios: (customer_id, items, status)' });
    }

    const dto: CreateOrderDTO = { customer_id, items, status };

    try {
      const order = this.createOrder.execute(dto);

      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async modifyItems(req: Request, res: Response) {
    const { items } = req.body;
    const { id } = req.params;

    if (!id && !items) {
      return res.status(400).json({
        error:
          'Falta algum dos campos para alterar: (id, items)',
      });
    }

    const dto: ModifyOrderItemsDTO = { id, items };

    try {
      const order = this.modifyOrderItems.execute(dto);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async modifyStatus(req: Request, res: Response) {
    const { status } = req.body;
    const { id } = req.params;

    const validStatuses = ['completed', 'pending', 'cancelled'];

    if (!id && !status) {
      return res.status(400).json({
        error:
          'Falta algum dos campos para alterar: (id, status)',
      });
    }

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        error: `Status inválido. Valores permitidos: ${validStatuses.join(', ')}`,
      });
    }

    const dto: ModifyOrderStatusDTO = { id, status };

    try {
      const order = this.modifyOrderStatus.execute(dto);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async cancel(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID não informado' });
    }

    try {
      this.cancelOrder.execute(id);
      res.send('Pedido cancelado com sucesso!');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
