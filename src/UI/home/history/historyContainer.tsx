import React, { Component } from 'react'
import { HomeNavigation } from '../navigation/homeNavigation'
import { UserMenu } from '../navigation/userMenu'
import { HistoryContent } from './historyContent'
import { TransactionService } from '../../../backend-service-connector/service'

export class HistoryContainer extends Component<any, any> {
    transactionService: TransactionService

    constructor(props: any) {
        super(props)

        this.transactionService = props.transactionService
    }

    render() {
        return (
            <div className={'home'}>
                <HomeNavigation/>
                <div className={'context'}>
                    <UserMenu/>
                    <HistoryContent  transactionService={this.transactionService}/>
                </div>
            </div>
        )
    }
}