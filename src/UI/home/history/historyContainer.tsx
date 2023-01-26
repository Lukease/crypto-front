import React, {Component} from "react";
import {UserService} from "../../../backend-service-connector/service";
import {HomeNavigation} from "../navigation/homeNavigation";
import {UserMenu} from "../navigation/userMenu";
import {HistoryContent} from "./historyContent";
import {TransactionService} from "../../../backend-service-connector/service/transactionService";


export class HistoryContainer extends Component<any, any> {
    userService: UserService
    transactionService: TransactionService

    constructor(props: any) {
        super(props)

        this.transactionService = props.transactionService
        this.userService = props.userService
    }

    render() {
        return (
            <div className={'home'}>
                <HomeNavigation/>
                <div className={'context'}>
                    <UserMenu/>
                    <HistoryContent userService={this.userService} transactionService={this.transactionService}/>
                </div>
            </div>
        )
    }
}