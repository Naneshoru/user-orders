import { CustomersRepository } from "./repositories/customers-repository.ts";
import { UsersRepository } from "./repositories/users-repository.ts";
import { OrdersRepository } from "./repositories/orders-repository.ts";
import { ProductsRepository } from "./repositories/products-repository.ts";
import express from "express";
import routes from "./routes/index";

const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})


console.log(new UsersRepository().getAllUsers())

console.log(new CustomersRepository().getAllCustomers())

console.log(
  JSON.stringify(
    new OrdersRepository()
  .getAllOrders(), null, 2
  )
)

console.log(new ProductsRepository().getAllProducts())
