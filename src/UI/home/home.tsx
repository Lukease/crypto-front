import React, {Component} from 'react'
import {UserService} from '../../backend-service-connector/service'

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

    return (
        <div id={'root'}>
            <div className={'navbar'}>
                <div className={'navbar__item'}>📈</div>
                <button className={'navbar__button'}>Home</button>
                <button className={'navbar__button'}>Dashboard</button>
                <button className={'navbar__button'}>Market</button>
                <div style={{width: '70%'}}></div>
                <div>⚙</div>
                <div style={{margin: '10px'}}>LogOut</div>
            </div>
        </div>
    )
}
