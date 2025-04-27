import crypto from 'crypto';

export class Order {
  public readonly id: string;
  public readonly customer_id?: string;
  public readonly status: 'pending' | 'completed' | 'cancelled';
  public readonly items: {
    product_id: string;
    quantity: number;
    value: number;
    subtotal: number;
  }[];
  public readonly total: number;
  public readonly createdAt: Date
  
  constructor(
    props: Omit<Order, 'id'>,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}