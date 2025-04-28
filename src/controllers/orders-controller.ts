import { CreateOrder } from "../use-cases/create-order"
import { Request, Response } from "express"
import { ListOrders } from "../use-cases/list-orders"
import { CreateOrderDTO } from "../dtos/create-order"

export class OrdersController {
  constructor(
    private createOrder: CreateOrder, 
    private listOrders: ListOrders 
  ) {}

  async get(req: Request, res: Response) {
    const orders = await this.listOrders.execute()
    res.json(orders)
  }

  async create(req: Request, res: Response) {
    const { customer_id, items, status } = req.body

    if (!customer_id || !items || !status) {
      return res.status(400).json({ error: 'Campos obrigatórios: (customer_id, items, status)' })
    }

    const dto: CreateOrderDTO = { customer_id, items, status }

    try {
      const order = await this.createOrder.execute(dto)
  
      res.status(201).json(order)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}