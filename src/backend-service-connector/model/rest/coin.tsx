export class Coin {
    private id: number | undefined
    private name: string
    private price: number


    constructor(id: number | undefined, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
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

    getPrice(): number {
        return this.price
    }

    setPrice(value: number) {
        this.price = value
    }
}