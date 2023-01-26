import React, {useState} from 'react'
import {User, UserLogIn} from "../../../backend-service-connector/model/rest";

export function EditUserInformation(props: any) {
    const userService = props.userService
    const [userLogin, setUserLogin] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const setNewUserDataToDb = (event: any, isLogin: boolean) => {
        event.preventDefault()

        const user: User = userService.getLogInUserFromLocalStorage()

        if (isLogin) {
            setUserLogin(userLogin)
            userService.editUserLogin(userLogin)
            user.login = userLogin
        } else {
            setUserEmail(userEmail)
            userService.editUserEmail(userEmail)
            user.email = userEmail
        }

        userService.setLogInUserToLocalStorage(user)
    }

    return (
        <div className={'editor-container'}>
            <h1 className={'editor-container__title'}>Edit Profile</h1>
            <label> Set login</label>
            <form className={'editor-container__nav'}>
                <input
                    type={'text'}
                    placeholder={'New login'}
                    name='login'
                    required minLength={5}
                    onChange={(event) => setUserLogin(event.target.value)}
                />
                <button
                    type={'submit'}
                    onClick={event => setNewUserDataToDb(event, true)}
                >
                    Edit login
                </button>
            </form>
            <label> Set email</label>
            <form className={'editor-container__nav'}>
                <input
                    type={'email'}
                    placeholder={'New email address'}
                    required minLength={5}
                    onChange={(event) => setUserEmail(event.target.value)}
                />
                <button
                    type={'submit'}
                    onClick={event => setNewUserDataToDb(event, false)}
                >
                    Edit Email
                </button>
            </form>
        </div>
    )
}