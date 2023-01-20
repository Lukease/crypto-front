export class UserLogIn{
    private login: string
    private password: string

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    getLogin(): string {
        return this.login;
    }

    setLogin(value: string) {
        this.login = value;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string) {
        this.password = value;
    }
}