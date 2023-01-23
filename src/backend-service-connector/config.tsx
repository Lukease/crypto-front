export class Config {
    static readonly baseUrl = 'http://localhost:8080/users'
    static readonly getAllUsersPath = '/get-all'
    static readonly removeUserPath = `?login=`
    static readonly logInUserPath = '/log-in'

    /**
     * w klasie config bedziemy przetrzymywali sciezki do fetch aby w razie konieczności edytowac je w jednym miejscu i dla przejzystości kodu
     * **/
}