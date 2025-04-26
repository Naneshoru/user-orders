import { Customer } from "../entities/customer.ts";

export class CustomersRepository {
  private customers: Customer[] = [];

  constructor() {
    this.customers = [
      new Customer({ name: "Alice Johnson", phone: "6566666666", address: "123 Main St" }),
      new Customer({ name: "Bob Smith", phone: "6566666667", address: "456 Elm St" }),
    ];
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomerById(id: string) {
    return this.customers.find(c => c.id === id);
  }

  addCustomer(name: string, address: string, phone: string, user_id?: string) {
    const newCustomer = { id: (this.customers.length + 1).toString(), name, address, phone, user_id };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}