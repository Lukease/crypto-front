import React, {Component} from 'react'
import {UserService} from '../../../backend-service-connector/service'
import {UserMenu} from "../navigation/userMenu";
import {HomeNavigation} from "../navigation/homeNavigation";
import {HomeContext} from "./homeContext";

export class Home extends Component<any, any> {
    userService: UserService

    constructor(props: any) {
        super(props)

        this.userService = props.userService
    }

    render() {
        return (
            <HomeMenu userService={this.userService}/>
        )
    }
}

function HomeMenu(props: any) {
    const userService =props.userService

    return (
        <div className={'home'}>
            <HomeNavigation/>
            <div className={'context'}>
                <UserMenu/>
                <HomeContext userService={userService}/>
            </div>
        </div>
    )
}