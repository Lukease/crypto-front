import {PieChart} from "react-minimal-pie-chart";
import React from "react";

export function Chart(props: any) {
    const userService = props.userService

    const data = [
        {color: '#E38627', title: 'Bitcoin', value: 10},
        {color: '#C13C37', title: 'Ethereum', value: 15},
        {color: '#6A2135', title: 'Luna', value: 20},
    ]

    const renderCryptoNames = () => {
        return data.map((crypto, index) => {
            return (
                <CryptoInChart key={index} color={crypto.color} title={crypto.title}/>
            )
        })
    }

    return (
        <div className={'chart-container'}>
            <div className={'chart-container__title'}>
                <h2 style={{width: '90%', textAlign: 'center'}}>
                    User portfolio
                </h2>
            </div>
            <div className={'chart-container__crypto-names'}>
                {
                    renderCryptoNames()
                }

            </div>
            <PieChart className={'chart-container__chart'}
                      data={data}
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