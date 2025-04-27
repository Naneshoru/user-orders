import { Order } from '../entities/order';

export class OrdersRepository {
  private orders: Order[] = [];

  constructor() {
    this.orders = [
      {
        id: '1',
        customer_id: '1',
        items: [
          {
            product_id: '1',
            quantity: 2,
            value: 10,
            subtotal: 20
          },
        ],
        total: 20, 
        status: 'pending',
        createdAt: new Date(),
      },
      {
        id: '2',
        customer_id: '2',
        items: [
          {
            product_id: '2',
            quantity: 1,
            value: 32,
            subtotal: 32
          },
        ],
        total: 32,
        status: 'completed',
        createdAt: new Date(),
      },
    ];
  }

  getAllOrders() {
    return this.orders;
  }

  getOrderById(id: string) {
    return this.orders.find((order) => order.id === id);
  }

  addOrder(
    customer_id: string,
    items: { 
      product_id: string; 
      quantity: number,
      value: number,
      subtotal: number,
    }[],
    status: 'completed' | 'pending' | 'cancelled'
  ) {
    const newOrder = {
      id: (this.orders.length + 1).toString(),
      customer_id,
      items,
      status,
      createdAt: new Date(),
      total: items.reduce((acc, item) => acc + item.quantity * item.value, 0)
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
