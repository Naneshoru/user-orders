import { OrdersRepository } from "../repositories/orders-repository";
import { ProductsRepository } from "../repositories/products-repository";
import { UsersRepository } from "../repositories/users-repository";

export class OrdersController {
  private ordersRepository: OrdersRepository;
  private productsRepository: ProductsRepository;
  private usersRepository: UsersRepository;

  constructor(props) {
    Object.assign(this, props);
  }

  async createOrder(userId: string, items: { product_id: string; quantity: number }[]) {
    const user = await this.usersRepository.getUserById(userId);

    if (!user) {
      throw new Error('Usuário não encontrado!');
    }

    const orderItems = await Promise.all(items.map(async (item) => {
      const product = await this.productsRepository.getProductById(item.product_id);

      if (!product) {
        throw new Error(`Produto com id ${item.product_id} não encontrado!`);
      }

      if (item.quantity <= 0) {
        throw new Error(`Quantidade inválida para o produto ${product.name}`);
      }

      return {
        product_id: product.id,
        quantity: item.quantity,
        value: product.price,
        subtotal: product.price * item.quantity,
      };
    }));

    const order = await this.ordersRepository.addOrder(
      user.id,
      orderItems,
      'pending',
    );

    return order;
  }
}