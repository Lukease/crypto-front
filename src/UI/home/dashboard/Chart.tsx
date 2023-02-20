import { PieChart } from 'react-minimal-pie-chart'
import React, { useEffect, useState } from 'react'
import { TCryptoChart } from './types'
import randomColor from 'randomcolor'
import { CoinInWallet } from '../../../backend-service-connector/model/rest'
import { CryptoInChart } from './CryptoInChart'

export function Chart(allUserCoins: Array<CoinInWallet>): JSX.Element {
  const [color, setColor] = useState<Array<string>>([])

  useEffect(() => {
    const arrayOfColors = allUserCoins.map(() => randomColor())

    setColor(arrayOfColors)
  }, [])

  const renderCryptoNames = () => {

    return allUserCoins.filter(crypto => crypto.walletPercent !== 0)
      .map((crypto, index) => {
        return (
          <CryptoInChart
            key={index}
            color={color[index]}
            title={`${crypto.coinUserDto.name} ${(Math.round(crypto.walletPercent * 100) / 100).toFixed(2)}%`}
          />
        )
      })
  }

  const data: Array<TCryptoChart> = allUserCoins.map((coin, index) => ({
    color: color[index], title: coin.coinUserDto.name, value: coin.walletPercent,
  }))

  return (
    <div className={'chart-container'}>
      <div className={'chart-container__title'}>
        <h2 style={{ width: '90%', textAlign: 'center' }}>
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
        animationEasing='ease-out'
        labelPosition={50}
        lengthAngle={360}
        lineWidth={100}
        paddingAngle={0}
        radius={50}
        rounded={false}
        startAngle={0}
        viewBoxSize={[100, 100]}
        onFocus={() => data.values()}
      />
    </div>
  )
}