import React from 'react'
import { HomeNavigation, UserMenu } from '../navigation'
import { HistoryContent } from './HistoryContent'

export function HistoryContainer(): JSX.Element {

  return (
    <div className={'home'}>
      <HomeNavigation />
      <div className={'context'}>
        <UserMenu />
        <HistoryContent/>
      </div>
    </div>
  )
}