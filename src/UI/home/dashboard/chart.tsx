import {PieChart} from 'react-minimal-pie-chart'
import React, {useEffect, useState} from 'react'
import {cryptoChart} from '../types'
import {CoinInWallet} from "../../../backend-service-connector/model/rest/coinInWallet";


export function Chart(props: any) {
    const userWallet = props.userWallet
    const allUserCoins: Array<CoinInWallet> = userWallet.allCoinsInWallet
    const [color, setColor] = useState<Array<any>>([])
    let randomColor = require('randomcolor')

    useEffect(() => {
        let arrayOfColors: Array<any> = []

        for (let i = 0; i < allUserCoins.length; i++) {
            const color = randomColor()

            arrayOfColors = arrayOfColors.concat(color)
        }

        setColor(arrayOfColors)
    }, [])

    const renderCryptoNames = () => {

        return allUserCoins.map((crypto, index) => {

            return (
                <CryptoInChart key={index} color={color[index]} title={crypto.coinUserDto.name}/>
            )
        })
    }

    const data: Array<cryptoChart> = allUserCoins.map((coin, index) => {
        const chartData: cryptoChart = {
            color: color[index],
            title: coin.coinUserDto.name,
            value: coin.walletPercent
        }

        return chartData
    })



    return (
        <div className={'chart-container'}>
            <div className={'chart-container__title'}>
                <h2 style={{width: '90%', textAlign: 'center'}}>
                    Portfolio
                </h2>
            </div>
            <div className={'chart-container__crypto-names'}>
                {
                    renderCryptoNames()
                }

            </div>
            <PieChart
                className={'chart-container__chart'}
                data={data}
                animate={true}
                animationDuration={500}
                animationEasing="ease-out"
                labelPosition={50}
                lengthAngle={360}
                lineWidth={100}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded={false}
                startAngle={0}
                viewBoxSize={[100, 100]}
                onFocus={(e, segmentIndex) => data.values()}
            />
        </div>
    )
}

function CryptoInChart(props: any) {

    return (
        <div className={'chart-container__crypto-names--container'}>
            <div style={{borderStyle: 'solid', borderColor: props.color, width: '20px', height: '0'}}></div>
            <div>{props.title}</div>
        </div>
    )
}