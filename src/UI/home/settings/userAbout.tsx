import React from 'react'
import {UserDto} from '../../../backend-service-connector/model/rest/userDto'

export function UserAbout(props: any) {
    const userService = props.userService
    const loggedUser: UserDto = userService.getLogInUserFromLocalStorage()

    return (
        <div className={'user'}>
            <div className={'user__image'}></div>
            <div className={'user__about'}>
                <div className={'user__container'}>
                    <h3>Login:</h3>
                    <div className={'user__container--nav'}>
                        <span>{loggedUser.login}</span>
                    </div>
                </div>
                <div className={'user__container'}>
                    <h3>Email:</h3>
                    <span>{loggedUser.email}</span>
                </div>
            </div>
        </div>
    )
}