export class Transaction {
  private readonly id: number | undefined
  private readonly type: string
  private readonly comment: string
  private readonly date: Date
  private readonly coin: string
  private readonly amount: number
  private readonly price: number
  private ownerId: number | undefined

  constructor(id: number | undefined, type: string, comment: string, date: Date, coin: string, amount: number, price: number, ownerId: number | undefined) {
    this.id = id
    this.type = type
    this.comment = comment
    this.date = date
    this.coin = coin
    this.amount = amount
    this.price = price
    this.ownerId = ownerId
  }


  getId(): number | undefined {
    return this.id
  }

  getType(): string {
    return this.type
  }

  getComment(): string {
    return this.comment
  }

  getDate(): Date {
    return this.date
  }

  getCoin(): string {
    return this.coin
  }

  getAmount(): number {
    return this.amount
  }

  getPrice(): number {
    return this.price
  }
}