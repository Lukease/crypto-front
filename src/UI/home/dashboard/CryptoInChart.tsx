import React from 'react'
import { TCryptoInChart } from './types'

export function CryptoInChart({ color, title }: TCryptoInChart): JSX.Element {

  return (
    <div className={'chart-container__crypto-names--container'}>
      <div style={{ borderStyle: 'solid', borderColor: color, width: '20px', height: '0' }}></div>
      <div>{title}</div>
    </div>
  )
}