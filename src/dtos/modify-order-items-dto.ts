export interface ModifyOrderItemsDTO {
  id: string
  items: {
    product_id: string;
    quantity: number;
    value: number;
    subtotal: number;
  }[];
}