import React from "react";
import {PieChart} from "react-minimal-pie-chart";
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
                <DashboardItem title={'Budget'} value={'$24k'} description={'12% Since Last month'} icon={'💰'}/>
                <DashboardItem title={'Total Customers'} value={'1,6k'} description={'16% Since Last month'}
                               icon={'👥'}/>
                <DashboardItem title={'Task Progress'} value={'75.5%'} description={''} icon={'💸'}/>
                <DashboardItem title={'Total Profit'} value={'$23k'} description={''} icon={'$'}/>
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
            <li className={'dashboard__item--icon'}>{props.icon}</li>
        </div>
    )
}