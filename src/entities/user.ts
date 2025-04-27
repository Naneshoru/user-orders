import crypto from 'crypto'

export class User {
  public readonly id: string
  public email: string
  public password: string
  public role: 'admin' | 'customer'

  constructor(
    props: Omit<User, 'id'>, 
    id?: string
  ) {
    Object.assign(this, props)

    this.id = id || crypto.randomUUID()
  }
}