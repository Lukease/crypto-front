import React, {Component} from 'react'
import {UserMenu} from '../navigation/userMenu'
import {HomeNavigation} from '../navigation/homeNavigation'
import {HomeContext} from './homeContext'
import {WalletService} from '../../../backend-service-connector/service/walletService'

export class Home extends Component<any, any> {
    walletService: WalletService

    constructor(props: any) {
        super(props)

        this.walletService = props.walletService
    }

    render() {
        return (
            <HomeMenu walletService={this.walletService}/>
        )
    }
}

function HomeMenu(props: any) {
    const walletService = props.walletService

    return (
        <div className={'home'}>
            <HomeNavigation/>
            <div className={'context'}>
                <UserMenu/>
                <HomeContext walletService={walletService}/>
            </div>
        </div>
    )
}