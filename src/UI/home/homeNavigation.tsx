import React from "react";

export function HomeNavigation() {

    return (
        <div className={'navbar'}>
            <div className={'navbar__item'}>
                <div className={'navbar__title'}></div>
            </div>
            <div className={'navbar__button'}>
                <div>📈</div>
                <div>Dashboard</div>
            </div>
            <div className={'navbar__button'}>
                <div>📜</div>
                <div>History</div>
            </div>
            <div className={'navbar__button'}>
                <div>👥</div>
                <div>Products</div>
            </div>
        </div>
    )

}
