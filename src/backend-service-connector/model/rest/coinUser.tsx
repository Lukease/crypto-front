export class CoinUser {
    private id: number
    private name: string
    private value: number
    private amount: number

    constructor(id: number, name: string, value: number, amount: number) {
        this.id = id
        this.name = name
        this.value = value
        this.amount = amount
    }


    getId(): number {
        return this.id
    }

    setId(value: number) {
        this.id = value
    }

    getName(): string {
        return this.name
    }

    setName(value: string) {
        this.name = value
    }

    getValue(): number {
        return this.value
    }

    setValue(value: number) {
        this.value = value
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(value: number) {
        this.amount = value;
    }
}