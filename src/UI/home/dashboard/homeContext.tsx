import React, {useEffect, useState} from "react";
import {Chart} from "./chart";
import {Transaction, Wallet} from "../../../backend-service-connector/model/rest";

export function HomeContext(props: any) {
    const userService = props.userService
    const walletService = props.walletService

    return (

        <Dashboard userService={userService} walletService={walletService}/>
    )
}

function Dashboard(props: any) {
    const userService = props.userService
    const walletService = props.walletService
    const [userWallet, setUserWallet] = useState<Wallet | null>(null)

    const getWallet = async () => {
        return await walletService.getUserWalletFromDb()
    }

    useEffect(() => {
        getWallet().then((response: any) => setUserWallet(response))
    }, [])

    const renderWallet = () => {

    }

    return (
        <div className={'dashboard'}>
            <div style={{height: '10%'}}></div>
            <div className={'dashboard__container'}>
                <DashboardItem title={'Total Value'} value={'$24k'} description={12} icon={'💰'}
                               color={'red'}/>
                <DashboardItem title={'First Transaction'} value={'22.12.2013'} description={''}
                               icon={'👥'} color={'green'}/>
                <DashboardItem title={'Total Transactions'} value={'6 Transactions'} description={''} icon={'💸'}
                               color={'yellow'}/>
                <DashboardItem title={'Total Profit'} value={'3%'} description={-2013} icon={'$'}
                               color={'blue'}/>
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
                {
                    props.description ?
                        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                            <div
                                style={{color: props.description >= 0 ? 'green' : 'red'}}
                            >
                                {`${props.description}%` }
                            </div>
                            <div>Since Last Month</div>
                        </div>
                        : null
                }
            </div>
            <li className={'dashboard__item--icon'} style={{backgroundColor: props.color}}>{props.icon}</li>
        </div>
    )
}