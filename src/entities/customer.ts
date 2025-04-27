import crypto from 'crypto'

export class Customer {
  public readonly id: string
  public readonly user_id?: string
  public name: string
  public phone: string
  public address: string

  constructor(
    props: Omit<Customer, 'id'>, 
    id?: string
  ) {
    Object.assign(this, props)
    
    this.id = id || crypto.randomUUID()
  }
}