import { CoinInWallet } from './CoinInWallet'

export class Wallet {
  userId: number
  investmentsValue: number
  currentValue: number
  allCoinsInWallet: Array<CoinInWallet> | undefined

  constructor(userId: number, investmentsValue: number, currentValue: number, allCoinsInWallet: Array<CoinInWallet>) {
    this.userId = userId
    this.investmentsValue = investmentsValue
    this.currentValue = currentValue
    this.allCoinsInWallet = allCoinsInWallet
  }

  getInvestmentsValue(): number {
    return this.investmentsValue
  }

  getCurrentValue(): number {
    return this.currentValue
  }

  getAllCoinsInWallet(): Array<CoinInWallet> | undefined {
    return this.allCoinsInWallet
  }
}