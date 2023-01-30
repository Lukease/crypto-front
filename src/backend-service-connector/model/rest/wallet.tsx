import {CoinUser} from './coinUser'

export class Wallet {
    private userId: number
    private investmentsValue: number
    private currentValue: number
    private allCoinsInWallet: Array<CoinUser> | undefined

    constructor(userId: number, investmentsValue: number, currentValue: number, allCoinsInWallet: Array<CoinUser>) {
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

    getAllCoinsInWallet(): Array<CoinUser> | undefined {
        return this.allCoinsInWallet;
    }

    setAllCoinsInWallet(value: Array<CoinUser> | undefined) {
        this.allCoinsInWallet = value;
    }
}