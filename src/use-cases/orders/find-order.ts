import { ListOrderDTO } from '../../dtos/list-orders-dto';
import { OrdersRepository } from '../../repositories/orders-repository';

export class FindOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(id: string) {
    const order: ListOrderDTO = this.ordersRepository.getOrderById(id);
    return order;
  }
}
