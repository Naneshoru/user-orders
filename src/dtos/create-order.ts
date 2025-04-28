export interface CreateOrderDTO {
  customer_id?: string;
  items: {
    product_id: string;
    quantity: number;
    value: number;
    subtotal: number;
  }[];
  status: 'pending' | 'completed' | 'cancelled';
}