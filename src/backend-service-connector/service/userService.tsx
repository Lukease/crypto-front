import {User} from '../model/rest'
import {Config} from '../config'
import {UserLogIn} from "../model/rest"
import {cryptoChart} from "../../UI/home/types"

export class UserService {
    allUsers: Array<User> = []
    logInUser: UserLogIn | undefined

    getActiveToken() {
        return JSON.parse(localStorage.getItem('logInUser')!).activeToken
    }

    async getAllUsers() {
        const users: Array<User> = await fetch(Config.baseUsersUrl + Config.getAllUsersPath, {
            method: 'GET'
        })
            .then((response) => {
                return response.json().then((data) => {

                    return data
                })
            })
            .catch(error => console.log(error))

        this.allUsers = users.map(value => value)
        return users

    }

    async addNewUser(newUser: User) {
        return await fetch(Config.baseUsersUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify(newUser)
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

    editUserLogin(newLogin: string) {
        const activeToken: string = this.getActiveToken()

        fetch(Config.baseUsersUrl + Config.editUserLoginPath, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: activeToken
            },
            body: JSON.stringify({login: newLogin})
        })
            .then(response => response.json())
            .catch(error => error)
    }

    editUserEmail(newEmail: string) {
        const activeToken: string = this.getActiveToken()

        fetch(Config.baseUsersUrl + Config.editUserEmailPath, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: activeToken
            },
            body: JSON.stringify({email: newEmail})
        })
            .then(response => response.json())
            .catch(error => error)
    }

    async logIn(login: string, password: string) {
        const userLogIn: UserLogIn = new UserLogIn(login, password)

        return await fetch(Config.baseUsersUrl + Config.logInUserPath, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify(userLogIn)
        })
            .then(response => {
                return response.json()
                    .then((data) => {
                        this.logInUser = data
                        this.setLogInUserToLocalStorage(data)

                        return data
                    })
                    .catch(() => {
                        this.logInUser = undefined
                    })
            })

    }

    setLogInUserToLocalStorage(user: UserLogIn | undefined) {
        localStorage.setItem('logInUser', JSON.stringify(user))
        window.dispatchEvent(new Event("storage"))
    }

    getLogInUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem('logInUser')!)
    }


    getDataForChart(): Array<cryptoChart> {
        return ([
            {color: '#E38627', title: 'Bitcoin', value: 40},
            {color: '#C13C37', title: 'Ethereum', value: 35},
            {color: '#6A2135', title: 'Luna', value: 10},
        ])
    }
}