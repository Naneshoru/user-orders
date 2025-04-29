
import { ModifyOrderStatusDTO } from '../dtos/modify-order-status-dto';
import { OrdersRepository } from '../repositories/orders-repository';

export class ModifyOrderStatus {
  constructor(
    private ordersRepository: OrdersRepository,
  ) {}

  execute(dto: ModifyOrderStatusDTO) {
    const { id, status } = dto;

    const order = this.ordersRepository.modifyOrderStatus(id, status);

    return `Status alterado com sucesso! ID: ${order.id}`;
  }
}
