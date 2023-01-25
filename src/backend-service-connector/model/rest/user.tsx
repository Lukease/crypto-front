export class User {
    id: number | undefined
    login: string
    password: string
    email: string
    activeToken: string | undefined
    validUtil: string | undefined


    constructor(id: number | undefined, login: string, password: string, email: string,
                activeToken: string | undefined, validUtil: string | undefined) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.email = email;
        this.activeToken = activeToken;
        this.validUtil = validUtil;
    }

    getId(): number | undefined {
        return this.id
    }

    setId(value: number) {
        this.id = value
    }

    getLogin(): string {
        return this.login
    }

    setLogin(value: string) {
        this.login = value
    }

    getPassword(): string {
        return this.password
    }

    setPassword(value: string) {
        this.password = value
    }

    getEmail(): string {
        return this.email
    }

    setEmail(value: string) {
        this.email = value
    }
}