import React, {Component} from "react";
import {UserService} from "../../backend-service-connector/service";
import {UserAbout} from "./userAbout";
import {EditUserInformation} from "./editUser";

export class SettingsMenu extends Component<any, any> {
    userService: UserService

    constructor(props: any) {
        super(props)

        this.userService = props.userService
    }
/**
 * element o tagu a po klikniecu przechodzimy do ściezki http://localhost:3000/home
 * **/
    render() {
        return (
            <div className={'settings'}>
                <div className={'settings__nav'}>
                    <UserAbout userService={this.userService}/>
                    <EditUserInformation userService={this.userService}/>
                    <a className={'settings__nav--escape'} href={'/home'}>X</a>
                </div>
            </div>
        )
    }
}