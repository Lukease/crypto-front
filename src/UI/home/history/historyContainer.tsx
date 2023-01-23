import React, {Component} from "react";
import {UserService} from "../../../backend-service-connector/service";
import {HomeNavigation} from "../navigation/homeNavigation";
import {UserMenu} from "../navigation/userMenu";
import {HistoryContent} from "./historyContent";


export class HistoryContainer extends Component<any, any> {
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
                    <HistoryContent userService={this.userService}/>
                </div>
            </div>
        )
    }
}