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
    let randomColor = require('randomcolor')
    const [color, setColor] = useState<Array<any>>([])
    const [userWallet, setUserWallet] = useState<Wallet | null>(null)

    const getWallet = async () => {
        const response = await walletService.getUserWalletFromDb()

        return new Wallet(response.userId, response.investmentsValue, response.currentValue, response.allCoinsInWallet)
    }

    useEffect(() => {
        getWallet().then((response: any) => setUserWallet(response))
    }, [])

    useEffect(() => {
        let arrayOfColors: Array<any> = []

        for (let i = 0; i < 5; i++) {
            const color = randomColor()

            arrayOfColors = arrayOfColors.concat(color)
        }

        setColor(arrayOfColors)
    }, [])

    const renderCoinsInfo = () => {
        return userWallet?.allCoinsInWallet?.map((coin, index) => {

            return (
                <DashboardItem
                    title={`${coin.coinUserDto.name} return In %`}
                    value={`${(Math.round(coin.returnInPercent * 100) / 100).toFixed(2)}`}
                    description={`return total ${(Math.round(coin.returnTotal * 100) / 100).toFixed(2)}`}
                    icon={'🪙'}
                    color={color[index]}
                    key={index}
                />

            )
        })
    }

    const renderWallet = () => {
        return (
            <div className={'dashboard__container'}>
                <DashboardItem title={'Total Value'}
                               value={`$${(Math.round(userWallet?.getCurrentValue()! * 100) / 100).toFixed(2)}`}
                               description={``}
                               icon={'💰'}
                               color={color[0]}
                />
                <DashboardItem title={'Investments Value'}
                               value={`$${(Math.round(userWallet?.getInvestmentsValue()! * 100) / 100).toFixed(2)}`}
                               description={''}
                               icon={'💵'}
                               color={color[1]}
                />
                {
                    userWallet?.getAllCoinsInWallet() ?
                        renderCoinsInfo()
                        : null
                }
                {
                    userWallet?.getAllCoinsInWallet() ?
                        <Chart userWallet={userWallet}/>
                        : null
                }
            </div>
        )
    }

    return (
        <div className={'dashboard'}>
            <div style={{height: '10%'}}></div>
            {
                renderWallet()
            }
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
                                {`${props.description}`}
                            </div>
                        </div>
                        : null
                }
            </div>
            <li className={'dashboard__item--icon'} style={{backgroundColor: props.color}}>{props.icon}</li>
        </div>
    )
}