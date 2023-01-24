import React, {useState} from "react";

export function HistoryContent(props: any) {
    const userService = props.userService
    const [operationType, setOperationType]= useState('Trade')
    const [isAddButtonClicked, setAddButtonClicked] = useState(false)
    const [operationDate, setOperationDate] = useState('23.01.2023')

    const navigation = [{
        type: 'Wpłata',
        buy: 0.0712837,
        crypto: 'XRP',
        sell: '',
        currSell: '',
        comment: 'Spadek BTC',
        date: '28.12.2017 01:15'
    }, {
        type: 'Wypłata',
        buy: 1.000000123,
        crypto: 'BTC',
        sell: 0.123123,
        currSell: 'XRP',
        comment: 'Wzrost BTC',
        date: '18.02.2022 11:25'
    }, {
        type: 'Wpłata',
        buy: 1.12432302340123,
        crypto: 'BTC',
        sell: '',
        currSell: '',
        comment: 'Od babci na batonika',
        date: '25.12.2022 12:00'
    }]

    const renderAllUserHistory = () => {
        return navigation.map((history, index) => {
            return <HistoryItem
                type={history.type}
                buy={history.buy}
                crypto={history.crypto}
                sell={history.sell}
                currSell={history.currSell}
                comment={history.comment}
                date={history.date}
                key={index}
            />
        })
    }


    return (
        <div className={'dashboard'}>
            {
                isAddButtonClicked ?
                    <div className={'new-transaction'}>
                        <div className={'new-transaction__container'}>
                            <form className={'new-transaction__type-container'}>
                                <label>Type</label>
                                <input
                                    type={'checkbox'}
                                    value={'CashIn'}
                                    checked={operationType === 'CashIn'}
                                    onChange={() => setOperationType('CashIn')}

                                />
                                <label>CashIn</label>
                                <input
                                    type={'checkbox'}
                                    value={'CashOut'}
                                    checked={operationType === 'CashOut'}
                                    onChange={() => setOperationType('CashOut')}
                                />
                                <label>CashOut</label>
                            </form>
                            <form className={'new-transaction__type-container'}>
                                <label>Date</label>
                                <input
                                    type={'date'}
                                    min="2011-01-01"
                                    onChange={(event) => setOperationDate(event.target.value)}
                                />

                            </form>
                            <button onClick={() => console.log(operationDate)}>click</button>
                        </div>

                    </div>
                    : null
            }
            <div style={{height: '10%'}}></div>
            <div className={'history'}>
                <button style={{left: '200px'}} onClick={() => setAddButtonClicked(!isAddButtonClicked)}>Add</button>
                <div className={'history__container'}>
                    <div className={'history__navigation'}>
                        <p className={'history__navigation--item'}>Type</p>
                        <p className={'history__navigation--item'}>Buy</p>
                        <p className={'history__navigation--item'}>Crypto</p>
                        <p className={'history__navigation--item'}>Sell</p>
                        <p className={'history__navigation--item'}>Cur.</p>
                        <p className={'history__navigation--item'}>Comment</p>
                        <p className={'history__navigation--item'}>Trade Date</p>
                    </div>
                    {
                        renderAllUserHistory()
                    }

                </div>
            </div>
        </div>
    )

}

function HistoryItem(props: any) {

    return (
        <div className={'history__navigation'} style={props.style}>
            <p className={'history__navigation--item'}>{props.type}</p>
            <p className={'history__navigation--item'}>{props.buy}</p>
            <p className={'history__navigation--item'}>{props.crypto}</p>
            <p className={'history__navigation--item'}>{props.sell}</p>
            <p className={'history__navigation--item'}>{props.currSell}</p>
            <p className={'history__navigation--item'}>{props.comment}</p>
            <p className={'history__navigation--item'}>{props.date}</p>
        </div>
    )
}
