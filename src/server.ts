import { CustomersRepository } from "./repositories/customers-repository.ts";
import { UsersRepository } from "./repositories/users-repository.ts";
import { OrdersRepository } from "./repositories/orders-repository.ts";
import { ProductsRepository } from "./repositories/products-repository.ts";

console.log(new UsersRepository().getAllUsers())

console.log(new CustomersRepository().getAllCustomers())

console.log(
  JSON.stringify(
    new OrdersRepository()
  .getAllOrders(), null, 2
  )
)

console.log(new ProductsRepository().getAllProducts())
