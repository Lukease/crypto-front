import React, {Component} from 'react'
import {UserService} from '../../../backend-service-connector/service'
import {UserMenu} from "../navigation/userMenu";
import {HomeNavigation} from "../navigation/homeNavigation";
import {HomeContext} from "./homeContext";
import {WalletService} from "../../../backend-service-connector/service/walletService";

export class Home extends Component<any, any> {
    userService: UserService
    walletService: WalletService

    constructor(props: any) {
        super(props)

        this.userService = props.userService
        this.walletService = props.walletService
    }

    render() {
        return (
            <HomeMenu userService={this.userService} walletService={this.walletService}/>
        )
    }
}

function HomeMenu(props: any) {
    const userService = props.userService
    const walletService = props.walletService

    return (
        <div className={'home'}>
            <HomeNavigation/>
            <div className={'context'}>
                <UserMenu/>
                <HomeContext userService={userService} walletService={walletService}/>
            </div>
        </div>
    )
}