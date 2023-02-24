import React, { useContext, useEffect, useState } from 'react'
import { Chart } from './Chart'
import { Wallet } from '../../../backend-service-connector/model/rest'
import randomColor from 'randomcolor'
import { DashboardItem } from './DashboardItem'
import { WalletServiceContext } from '../../../backend-service-connector/context'

export function HomeContext(): JSX.Element {
  const walletService = useContext(WalletServiceContext)
  const [color, setColor] = useState<Array<string>>([])
  const [userWallet, setUserWallet] = useState<Wallet | null>(null)

  const getWallet = async () => {
    const response = await walletService.getUserWalletFromDb()

    return new Wallet(response.userId, response.investmentsValue, response.currentValue, response.allCoinsInWallet)
  }

  useEffect(() => {
    getWallet().then((response: any) => setUserWallet(response))
  }, [])

  useEffect(() => {
    const arrayOfColors = new Array(6).map(() => {
      return randomColor()
    })

    setColor(arrayOfColors)
  }, [])

  const renderCoinsInfo = () => {
    return userWallet?.allCoinsInWallet?.filter(coin => coin.walletPercent !== 0.)
      .map((coin, index) => {
        return (
          <DashboardItem
            title={`${coin.coinUserDto.name} return`}
            value={`${(Math.round(coin.returnTotal * 100) / 100).toFixed(2)}`}
            description={parseFloat((Math.round(coin.returnInPercent * 100) / 100).toFixed(2))}
            icon={'🪙'}
            color={color[index]}
            currentCoinPrice={coin.coinUserDto.currentPrice}
            key={index}
          />

        )
      })
  }

  const renderWallet = () => {
    const investmentInPercent = (userWallet!.getCurrentValue()! * 100) / userWallet!.getInvestmentsValue()! - 100

    return (
      <div className={'dashboard__container'}>
        <DashboardItem title={'Total Value'}
                       value={`$${(Math.round(userWallet!.getCurrentValue()! * 100) / 100).toFixed(2)}`}
                       description={undefined}
                       icon={'💰'}
                       color={color[0]}
                       currentCoinPrice={undefined}
        />
        <DashboardItem title={'Investments Value'}
                       value={`$${(Math.round(userWallet!.getInvestmentsValue()! * 100) / 100).toFixed(2)}`}
                       description={parseFloat((Math.round(investmentInPercent * 100) / 100).toFixed(2))}
                       icon={'💵'}
                       color={color[1]}
                       currentCoinPrice={undefined}
        />
        {
          userWallet?.getAllCoinsInWallet() ?
            renderCoinsInfo()
            : null
        }
        {
          userWallet?.getAllCoinsInWallet() ?
            <Chart {...userWallet?.allCoinsInWallet ? userWallet?.allCoinsInWallet : []} />
            : null
        }
      </div>
    )
  }

  return (
    <div className={'dashboard'}>
      <div style={{ height: '10%' }}></div>
      {
        userWallet ? renderWallet() : null
      }
    </div>
  )
}