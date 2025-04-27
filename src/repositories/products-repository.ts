import { Product } from "../entities/product";

export class ProductsRepository {
  private products: Product[] = [];

  constructor() {
    this.products = [
      new Product({ name: 'Product 1', price: 10.0 }),
      new Product({ name: 'Product 2', price: 20.0 }),
      new Product({ name: 'Product 3', price: 30.0 }),
    ];
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find(product => product.id === id);
  }

  addProduct(name: string, price: number, description?: string) {
    const newProduct = new Product({ name, price, description });
    this.products.push(newProduct);
    return newProduct;
  }
}