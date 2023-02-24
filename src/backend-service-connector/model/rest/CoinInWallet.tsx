import { CoinUser } from './CoinUser'

export class CoinInWallet {
  returnInPercent: number
  returnTotal: number
  walletPercent: number
  coinUserDto: CoinUser

  constructor(returnInPercent: number, returnTotal: number, walletPercent: number, coinUserDto: CoinUser) {
    this.returnInPercent = returnInPercent
    this.returnTotal = returnTotal
    this.walletPercent = walletPercent
    this.coinUserDto = coinUserDto
  }
}