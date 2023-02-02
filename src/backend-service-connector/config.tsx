export class Config {
    static readonly baseUsersUrl = 'http://localhost:8080/users'
    static readonly getAllUsersPath = '/get-all'
    static readonly removeUserPath = `?login=`
    static readonly logInUserPath = '/log-in'
    static readonly editUserEmailPath = '/new-email'
    static readonly editUserLoginPath = '/new-login'

    static readonly baseTransactionsUrl = 'http://localhost:8080/transactions'
    static readonly getAllTransactionsPath = '/get-all'
    static readonly getAllUserTransactionsPath = '/all-transactions'
    static readonly getAllCoinsInfoPath = '/get-coins-prices'
    static readonly deleteTransactionPath = '/delete-transaction?transactionId='

    static readonly baseWalletUrl = 'http://localhost:8080/wallet'


    /**
     * w klasie config bedziemy przetrzymywali sciezki do fetch aby w razie konieczności edytowac je w jednym miejscu i dla przejzystości kodu
     * **/
}