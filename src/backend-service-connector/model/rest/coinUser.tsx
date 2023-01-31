export class CoinUser {
    id: number
    name: string
    amount: string
    currentPrice: number
    currentValue: number

    constructor(id: number, name: string, amount: string, currentPrice: number, currentValue: number) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.currentPrice = currentPrice;
        this.currentValue = currentValue;
    }

    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getAmount(): string {
        return this.amount;
    }

    setAmount(value: string) {
        this.amount = value;
    }

    getCurrentPrice(): number {
        return this.currentPrice;
    }

    setCurrentPrice(value: number) {
        this.currentPrice = value;
    }

    getCurrentValue(): number {
        return this.currentValue;
    }

    setCurrentValue(value: number) {
        this.currentValue = value;
    }
}