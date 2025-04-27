import { CreateOrder } from "../use-cases/create-order"
import { Request, Response } from "express"
import { ListOrders } from "../use-cases/list-orders"

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

    const order = await this.createOrder.execute(customer_id, items, status)

    res.status(201).json(order)
  }
}