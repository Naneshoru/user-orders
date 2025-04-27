export class Product {
  public readonly id: string;
  public readonly name: string;
  public readonly price: number;
  public readonly description?: string

  constructor(
    props: Omit<Product, 'id'>,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}