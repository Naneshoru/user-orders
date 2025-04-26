import { CustomersRepository } from "./repositories/customers-repository.ts";
import { UsersRepository } from "./repositories/users-repository.ts";

console.log(new UsersRepository().getAllUsers())

console.log(new CustomersRepository().getAllCustomers())
