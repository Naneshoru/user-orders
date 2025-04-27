import { CustomersRepository } from "./repositories/customers-repository.ts";
import { UsersRepository } from "./repositories/users-repository.ts";
import { Product } from './entities/product.ts';
import { Order } from './entities/order.ts';

console.log(new UsersRepository().getAllUsers())

console.log(new CustomersRepository().getAllCustomers())

const productA = new Product({
  name: 'Product A', 
  price: 50, 
  description: 'Description of Product A'
});
const productB = new Product({
  name: 'Product B', 
  price: 150,
  description: 'Description of Product B'
});

const order = new Order({
  customer_id: '12345',
  status: 'pending',
  items: [
    {
      product_id: productA.id,
      quantity: 2,
      value: productA.price,
      subtotal: productA.price * 2
    },
    {
      product_id: productB.id,
      quantity: 1,
      value: productB.price,
      subtotal: productB.price * 1
    }
  ],
  total: 250,
  createdAt: new Date()
});

console.log(order);