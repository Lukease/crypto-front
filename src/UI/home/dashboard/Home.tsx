import React from 'react'
import { UserMenu, HomeNavigation } from '../navigation'
import { HomeContext } from './HomeContext'

export function Home_Menu(): JSX.Element {

  return (
    <div className={'home'}>
      <HomeNavigation />
      <div className={'context'}>
        <UserMenu />
        <HomeContext />
      </div>
    </div>
  )
}