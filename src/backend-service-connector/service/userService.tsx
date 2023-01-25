import {User} from '../model/rest'
import {Config} from '../config'
import {UserLogIn} from "../model/rest"
import {cryptoChart} from "../../UI/home/types"

export class UserService {
    allUsers: Array<User> = []
    logInUser: UserLogIn | undefined

    async getAllUsers() {
        /**
         * funkcja która pobiera wszytskich uztykowników
         * **/
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
        /**
         * funkcja jako parametr otrzymuje użytkownika który zostaje przekazany do zapisania do backendu
         * **/
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

    removeUserByLogin(login: string) {
        fetch(Config.baseUsersUrl + Config.removeUserPath + login, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.currentSession!.getActiveToken()
            },
        })
            .then(response => response.json())
            .catch(error => error)

        return login
    }

    async getUserByLogin(login: string) {
        await fetch(Config.baseUsersUrl + Config.removeUserPath + login, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.currentSession!.getActiveToken()
            },
        })
            .then(response => response.json())
            .catch(error => error)

        return login
    }

    editUserEmailById(userId: number, newEmail: string) {
        fetch(Config.baseUsersUrl + `/${userId}/${newEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.currentSession!.getActiveToken()
            },
        })
            .then(response => response.json())
            .catch(error => error)
    }

    editUserLoginById(userId: number, newEmail: string) {
        fetch(Config.baseUsersUrl + `/${userId}/${newEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.currentSession!.getActiveToken()
            },
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
                        console.log(data)
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