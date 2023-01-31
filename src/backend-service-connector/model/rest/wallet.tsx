import {CoinUser} from './coinUser'
import {CoinInWallet} from "./coinInWallet";

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


    getUserId(): number {
        return this.userId;
    }

    setUserId(value: number) {
        this.userId = value;
    }

    getInvestmentsValue(): number {
        return this.investmentsValue;
    }

    setInvestmentsValue(value: number) {
        this.investmentsValue = value;
    }

    getCurrentValue(): number {
        return this.currentValue;
    }

    setCurrentValue(value: number) {
        this.currentValue = value;
    }

    getAllCoinsInWallet(): Array<CoinInWallet> | undefined {
        return this.allCoinsInWallet;
    }

    setAllCoinsInWallet(value: Array<CoinInWallet> | undefined) {
        this.allCoinsInWallet = value;
    }
}