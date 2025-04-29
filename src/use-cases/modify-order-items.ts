import { ModifyOrderItemsDTO } from '../dtos/modify-order-items-dto';
import { OrdersRepository } from '../repositories/orders-repository';

export class ModifyOrderItems {
  constructor(
    private ordersRepository: OrdersRepository,
  ) {}

  execute(dto: ModifyOrderItemsDTO) {
    const { id, items } = dto;

    const order = this.ordersRepository.modifyOrderItems(id, items);

    return `Itens alterados com sucesso! ID: ${order.id}`;
  }
}
