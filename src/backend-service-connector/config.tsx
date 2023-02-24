export class Config {
  static readonly baseUsersUrl =  process.env.REACT_APP_BASE_USERS_URL!
  static readonly getAllUsersPath =  process.env.REACT_APP_GET_ALL_USERS_PATH!
  static readonly logInUserPath =  process.env.REACT_APP_lOG_IN_USER_PATH!
  static readonly editUserEmailPath =  process.env.REACT_APP_EDIT_USER_EMAIL_PATH!
  static readonly editUserLoginPath = process.env.REACT_APP_EDIT_USER_LOGIN_PATH!

  static readonly baseTransactionsUrl = process.env.REACT_APP_BASE_TRANSACTIONS_URL!
  static readonly getAllUserTransactionsPath = process.env.REACT_APP_GET_ALL_USER_TRANSACTIONS_PATH!
  static readonly getAllCoinsInfoPath = process.env.REACT_APP_GET_ALL_COINS_INFO_PATH!
  static readonly deleteTransactionPath = process.env.REACT_APP_DELETE_TRANSACTION_PATH!
  static readonly getUserCoinPath = process.env.REACT_APP_GET_USER_COIN_PATH!

  static readonly baseWalletUrl = process.env.REACT_APP_BASE_WALLET_URL!
}