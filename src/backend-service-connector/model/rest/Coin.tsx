export class Coin {
  private id: number | undefined
  private readonly name: string
  private readonly price: number

  constructor(id: number | undefined, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }

  getName(): string {
    return this.name
  }

  getPrice(): number {
    return this.price
  }
}