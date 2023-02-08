import React from 'react'

export function HomeNavigation() {

    return (
        <div className={'navbar'}>
            <div className={'navbar__item'}>
                <div className={'navbar__title'}></div>
            </div>
            <div className={'navbar__button'} onClick={()=> window.location.href = 'http://localhost:3000/home'}>
                <div>📈</div>
                <div>Dashboard</div>
            </div>
            <div className={'navbar__button'} onClick={()=> window.location.href = 'http://localhost:3000/home/history'}>
                <div>📜</div>
                <div>History</div>
            </div>
        </div>
    )
}
