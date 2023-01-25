export class Coin {
    private id: number | undefined
    private name: string
    private value: number


    constructor(name: string, value: number) {
        this.name = name
        this.value = value
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
}