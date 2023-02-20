import React from 'react'
import { UserAbout } from './UserAbout'
import { EditUserInformation } from './EditUser'
import { HomeNavigation, UserMenu } from '../navigation'

export function SettingsMenu(userService: any): JSX.Element {

  return (
    <div className={'home'}>
      <HomeNavigation />
      <div className={'context'}>
        <UserMenu />
        <div className={'dashboard'}>
          <div className={'settings__nav'}>
            <UserAbout {...userService} />
            <EditUserInformation {...userService} />
          </div>
        </div>
      </div>
    </div>
  )
}