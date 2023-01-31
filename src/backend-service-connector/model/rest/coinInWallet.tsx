import {CoinUser} from "./coinUser";

export class CoinInWallet {
     returnInPercent: number
     returnTotal: number
     walletPercent: number
     coinUserDto: CoinUser

    constructor(returnInPercent: number, returnTotal: number, walletPercent: number, coinUserDto: CoinUser) {
        this.returnInPercent = returnInPercent;
        this.returnTotal = returnTotal;
        this.walletPercent = walletPercent;
        this.coinUserDto = coinUserDto;
    }

    getReturnInPercent(): number {
        return this.returnInPercent;
    }

    setReturnInPercent(value: number) {
        this.returnInPercent = value;
    }

    getReturnTotal(): number {
        return this.returnTotal;
    }

    setReturnTotal(value: number) {
        this.returnTotal = value;
    }

    getWalletPercent(): number {
        return this.walletPercent;
    }

    setWalletPercent(value: number) {
        this.walletPercent = value;
    }

    getCoinUserDto(): CoinUser {
        return this.coinUserDto;
    }

    setCoinUserDto(value: CoinUser) {
        this.coinUserDto = value;
    }
}