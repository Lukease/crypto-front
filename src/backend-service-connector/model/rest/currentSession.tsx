export class CurrentSession {
    private activeToken: string
    private validUtil: Date

    constructor(activeToken: string, validUtil: Date) {
        this.activeToken = activeToken;
        this.validUtil = validUtil;
    }


    getActiveToken(): string {
        return this.activeToken;
    }

    setActiveToken(value: string) {
        this.activeToken = value;
    }

    getValidUtil(): Date {
        return this.validUtil;
    }

    setValidUtil(value: Date) {
        this.validUtil = value;
    }
}