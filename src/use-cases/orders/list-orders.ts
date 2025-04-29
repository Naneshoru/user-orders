import { ListOrderDTO } from '../../dtos/list-orders-dto';
import { OrdersRepository } from '../../repositories/orders-repository';

export class ListOrders {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute() {
    const orders: ListOrderDTO[] = this.ordersRepository.getAllOrders();

    return orders;
  }
}
