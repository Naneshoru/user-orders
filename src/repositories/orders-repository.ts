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

  modifyOrderItems(
    id: string,
    items: {
      product_id: string; 
      quantity: number,
      value: number,
      subtotal: number,
    }[]
  ) {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new Error('Pedido não encontrado!');
    }

    const updatedOrder: Order = {
      ...order,
      items: items.map((item) => {
        const existingItem = order.items.find((i) => i.product_id === item.product_id);
        if (existingItem) {
          return {
            ...existingItem,
            quantity: item.quantity,
            value: item.value,
            subtotal: item.subtotal
          };
        }
        return item;
      }),
      total: items.reduce((acc, item) => acc + item.quantity * item.value, 0)
    }

    this.orders = this.orders.map((o) => (o.id === id ? updatedOrder : o));

    return updatedOrder
  }
  
  modifyOrderStatus(id: string, status: 'completed' | 'pending' | 'cancelled') {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new Error('Pedido não encontrado!');
    }

    const updatedOrder: Order = {
      ...order,
      status,
    };

    this.orders = this.orders.map((o) => (o.id === id ? updatedOrder : o));
    
    return updatedOrder;
  }

  cancelOrder(id: string) {
    const orderIndex = this.orders.findIndex((order) => order.id === id);

    if (orderIndex === -1) {
      throw new Error('Pedido não encontrado!');
    }

    this.orders.splice(orderIndex, 1);
  }
}
