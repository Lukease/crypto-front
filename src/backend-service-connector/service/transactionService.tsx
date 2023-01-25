import {Transaction, User} from '../model/rest'
import {Config} from '../config'

export class TransactionService {

    async addNewTransaction(newTransaction: Transaction) {

        return await fetch(Config.baseTransactionsUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify(newTransaction)
        })
            .then(response => {
                return response.json()
                    .then((data) => {
                        return data
                    })
                    .catch(error => {
                        alert(error)
                    })
            })
    }

    async getAllUserTransactions() {
        return  await fetch(Config.baseTransactionsUrl + Config.getAllUsersPath, {
            method: 'GET'
        })
            .then((response) => {
                return response.json().then((data) => {

                    return data
                })
            })
            .catch(error => console.log(error))
    }
}