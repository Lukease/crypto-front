export class CoinUser {
  id: number
  name: string
  amount: string
  currentPrice: number
  currentValue: number

  constructor(id: number, name: string, amount: string, currentPrice: number, currentValue: number) {
    this.id = id
    this.name = name
    this.amount = amount
    this.currentPrice = currentPrice
    this.currentValue = currentValue
  }
}