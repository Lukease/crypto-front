import React from "react";
import {Chart} from "./chart";

export function HomeContext(props: any) {
    const userService = props.userService

    return (

        <Dashboard userService={userService}/>
    )
}

function Dashboard(props: any) {
    const userService = props.userService

    return (
        <div className={'dashboard'}>
            <div style={{height: '10%'}}></div>
            <div className={'dashboard__container'}>
                <DashboardItem title={'Total Value'} value={'$24k'} description={'12% Since Last month'} icon={'💰'}
                                    color={'red'}/>
                <DashboardItem title={'First Transaction'} value={'22.12.2013'} description={''}
                                    icon={'👥'} color={'green'}/>
                <DashboardItem title={'Total Transactions'} value={'6 Transactions'} description={''} icon={'💸'} color={'yellow'}/>
                <DashboardItem title={'Total Profit'} value={'3%'} description={'since 2013'} icon={'$'} color={'blue'}/>
                <Chart userService={userService}/>
            </div>
        </div>
    )
}

function DashboardItem(props: any) {

    return (
        <div className={'dashboard__item'}>
            <div className={'dashboard__item--description'}>
                <div>{props.title}</div>
                <div className={'dashboard__item--big-value'}>{props.value}</div>
                <div>{props.description}</div>
            </div>
            <li className={'dashboard__item--icon'} style={{backgroundColor: props.color}}>{props.icon}</li>
        </div>
    )
}