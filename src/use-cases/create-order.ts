import { OrdersRepository } from "../repositories/orders-repository";
import { UsersRepository } from "../repositories/users-repository";

export class CreateOrder {
  constructor(
    private ordersRepository: OrdersRepository,
    private usersRepository: UsersRepository,
  ) {}

  execute (customer_id: string, items: { product_id: string; quantity: number; value: number; subtotal: number; }[], status: 'completed' | 'pending' | 'cancelled') {
    const customer = this.usersRepository.getUserById(customer_id)

    if (!customer) {
      throw new Error('Cliente não encontrado!')
    }

    const order = this.ordersRepository.addOrder(customer_id, items, status)

    return `Pedido criado com sucesso! ID: ${order.id}`
  }
}