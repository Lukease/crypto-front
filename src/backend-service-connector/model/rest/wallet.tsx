import {CoinUser} from './coinUser'

export class Wallet {
    private id: number
    private totalValue: number
    private trueTotalValue: number
    private allUserCoins: Array<CoinUser> | undefined

    constructor(id: number, totalValue: number, trueTotalValue: number, allUserCoins: Array<CoinUser>) {
        this.id = id;
        this.totalValue = totalValue;
        this.trueTotalValue = trueTotalValue;
        this.allUserCoins = allUserCoins;
    }

    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getTotalValue(): number {
        return this.totalValue;
    }

    setTotalValue(value: number) {
        this.totalValue = value;
    }

    getTrueTotalValue(): number {
        return this.trueTotalValue;
    }

    setTrueTotalValue(value: number) {
        this.trueTotalValue = value;
    }

    getAllUserCoins(): Array<CoinUser> | undefined {
        return this.allUserCoins;
    }

    setAllUserCoins(value: Array<CoinUser> | undefined) {
        this.allUserCoins = value;
    }
}