export class Transaction {
    private readonly id: number | undefined
    private type: string
    private comment: string
    private date: Date
    private coin: string
    private amount: number
    private value: number
    private ownerId: number | undefined

    constructor(id: number | undefined, type: string, comment: string, date: Date, coin: string, amount: number, value: number, ownerId: number | undefined) {
        this.id =id
        this.type = type;
        this.comment = comment;
        this.date = date;
        this.coin = coin;
        this.amount = amount;
        this.value = value;
        this.ownerId = ownerId;
    }


    getId(): number | undefined {
        return this.id;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    getComment(): string {
        return this.comment;
    }

    setComment(value: string) {
        this.comment = value;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(value: Date) {
        this.date = value;
    }

    getCoin(): string {
        return this.coin;
    }

    setCoin(value: string) {
        this.coin = value;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(value: number) {
        this.amount = value;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number) {
        this.value = value;
    }

    getOwnerId(): number | undefined {
        return this.ownerId;
    }

    setOwnerId(value: number) {
        this.ownerId = value;
    }
}