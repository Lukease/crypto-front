import {UserDto} from '../model/rest/userDto'
import {Config} from '../config'
import {UserLogIn} from "../model/rest/userLogIn";
import {CurrentSession} from "../model/rest/currentSession";

export class UserService {
    allUsers: Array<UserDto> = []
    actualSession: CurrentSession | undefined

    async getAllUsers() {
        /**
         * funkcja która pobiera wszytskich uztykowników
         * **/
        const users: Array<UserDto> = await fetch(Config.baseUrl + Config.getAllUsersPath, {
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

    async addNewUser(newUser: UserDto) {
        /**
         * funkcja jako parametr otrzymuje użytkownika który zostaje przekazany do zapisania do backendu
         * **/
        return await fetch(Config.baseUrl, {
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
        /**
         * funkcja która umożliwia usuwanie użytkownika poprzez podanie loginu
         * jako header jest wysyłana także autoryzacja która zawiera token zalogowanego uzytkownika dla zabezpieczenia
         * **/
        fetch(Config.baseUrl + `?login=${login}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: this.actualSession!.getActiveToken()
            },
        })
            .then(response => response.json())
            .catch(error => error)

        return login
    }

    async getUserByLogin(login: string) {
        await fetch(Config.baseUrl + `?login=${login}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        })
            .then(response => response.json())
            .catch(error => error)

        return login
    }

    editUserEmailById(userId: number, newEmail: string) {
        fetch(Config.baseUrl + `/${userId}/${newEmail}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        })
            .then(response => response.json())
            .catch(error => error)
    }

    editUserPasswordById(userId: number, newEmail: string) {
        fetch(Config.baseUrl + `/${userId}/${newEmail}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        })
            .then(response => response.json())
            .catch(error => error)
    }

    editUserLoginById(userId: number, newEmail: string) {
        fetch(Config.baseUrl + `/${userId}/${newEmail}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        })
            .then(response => response.json())
            .catch(error => error)
    }

    async logIn(login: string, password: string) {
        /**
         * funkcja asynchroniczna w której wysyłamy zapytanie do backendu metodą post
         * w przypadku otzrymania błędu jako nasza currentSession bedzie undefined
         * jeżeli backend znajdzie nam takiego użytkownik utorzy nam token i prześle go nam w response
         * który sobie zapiszemy jako obecna sessia
         * **/
        const userLogIn: UserLogIn = new UserLogIn(login, password)

        return await fetch(Config.baseUrl + '/logIn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify(userLogIn)
        })
            .then(response => {
                return response.json()
                    .then((data) => {
                        this.setCurrentSession(data)
                        alert('success logIn')

                        return data
                    })
                    .catch(() => {
                        this.setCurrentSession(undefined)
                    })
            })
    }

    setCurrentSession(session: CurrentSession | undefined) {
        this.actualSession = session
    }

    getCurrentSession() {
        return this.actualSession
    }
}