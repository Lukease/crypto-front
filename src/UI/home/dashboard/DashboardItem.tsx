import React from 'react'
import { TDashboardItem } from './types'

export function DashboardItem({ title, description, value, currentCoinPrice, color, icon }: TDashboardItem): JSX.Element {

  return (
    <div className={'dashboard__item'}>
      <div className={'dashboard__item--description'}>
        <div>{title}</div>
        <div className={'dashboard__item--big-value'}>{value}</div>
        {
          description ?
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <div
                style={{ color: description >= 0 ? 'green' : 'red' }}
              >
                {`${description}%`}
              </div>
            </div>
            : null
        }
        {
          currentCoinPrice ?
            <div
              style={{ marginTop: '10px' }}
            >
              {`coin current price: ${currentCoinPrice}$`}
            </div>
            : null
        }
      </div>
      <li
        className={'dashboard__item--icon'}
        style={{ backgroundColor: color }}
      >
        {icon}
      </li>
    </div>
  )
}