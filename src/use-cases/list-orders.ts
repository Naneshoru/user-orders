import { OrdersRepository } from "../repositories/orders-repository"

export class ListOrders {
  constructor(
    private ordersRepository: OrdersRepository,
  ) {}

  async execute() {
    const orders = await this.ordersRepository.getAllOrders()

    return orders
  }
}