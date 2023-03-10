import { Transaction } from '../model/rest'
import { Config } from '../config'

export class TransactionService {
  getActiveToken() {
    return JSON.parse(localStorage.getItem('logInUser')!).activeToken
  }

  async addNewTransaction(newTransaction: Transaction) {
    const activeToken: string = this.getActiveToken()

    return await fetch(Config.baseTransactionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: activeToken,
      },
      body: JSON.stringify(newTransaction),
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  async getAllUserTransactionsFromDb() {
    const activeToken: string = this.getActiveToken()
    return await fetch(Config.baseTransactionsUrl + Config.getAllUserTransactionsPath, {
      method: 'GET',
      headers: {
        Authorization: activeToken,
      },
    })
      .then(res => res.json())
      .catch(err => alert(err))
  }

  async getAllCoins() {
    const activeToken: string = this.getActiveToken()

    return await fetch(Config.baseTransactionsUrl + Config.getAllCoinsInfoPath, {
      method: 'GET',
      headers: {
        Authorization: activeToken,
      },
    })
      .then(res => res.json())
      .catch(err => alert(err))
  }

  async deleteUserTransaction(transactionId: number) {
    const activeToken: string = this.getActiveToken()

    return await fetch(Config.baseTransactionsUrl + Config.deleteTransactionPath + transactionId, {
      method: 'DELETE',
      headers: {
        Authorization: activeToken,
      },
    })
  }

  async getUserCoin(coinName: string) {
    const activeToken: string = this.getActiveToken()

    return await fetch(Config.baseTransactionsUrl + Config.getUserCoinPath + coinName, {
      method: 'GET',
      headers: {
        Authorization: activeToken,
      },
    })
      .then(res => res.json())
  }
}