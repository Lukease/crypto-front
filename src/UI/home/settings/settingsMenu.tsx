import React, { Component } from 'react'
import { UserService } from '../../../backend-service-connector/service'
import { UserAbout } from './userAbout'
import { EditUserInformation } from './editUser'
import { HomeNavigation } from '../navigation/homeNavigation'
import { UserMenu } from '../navigation/userMenu'

export class SettingsMenu extends Component<any, any> {
    userService: UserService

    constructor(props: any) {
        super(props)

        this.userService = props.userService
    }

    render() {
        return (
            <div className={'home'}>
                <HomeNavigation/>
                <div className={'context'}>
                    <UserMenu/>
                    <div className={'dashboard'}>
                        <div className={'settings__nav'}>
                            <UserAbout userService={this.userService}/>
                            <EditUserInformation userService={this.userService}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}