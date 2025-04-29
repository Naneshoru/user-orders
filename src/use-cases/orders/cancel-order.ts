import { OrdersRepository } from '../../repositories/orders-repository';

export class CancelOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  execute(id: string) {
    this.ordersRepository.cancelOrder(id);
  }
}
