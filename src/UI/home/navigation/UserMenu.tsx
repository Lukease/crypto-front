import React from 'react'

export function UserMenu(): JSX.Element {

  const showUSerSettings = () => {
    window.location.href = 'http://localhost:3000/home/user'
  }

  return (
    <div className={'context__navigation'}>
      <div className={'context__navigation--item'} onClick={() => showUSerSettings()}>👤</div>
    </div>
  )
}