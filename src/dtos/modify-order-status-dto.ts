export interface ModifyOrderStatusDTO {
  id: string
  status: 'pending' | 'completed' | 'cancelled';
}