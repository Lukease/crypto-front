import {Config} from '../config'

export class WalletService {
    getActiveToken() {
        return JSON.parse(localStorage.getItem('logInUser')!).activeToken
    }

    async getUserWalletFromDb() {
        const activeToken: string = this.getActiveToken()

        return await fetch(Config.baseWalletUrl , {
            method: 'GET',
            headers: {
                Authorization: activeToken
            },
        })
            .then(res => res.json())
            .catch(err => alert(err))
    }
}