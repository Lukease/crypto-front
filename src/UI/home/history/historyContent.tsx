import React, {useState} from "react";
import {Coin, Transaction} from "../../../backend-service-connector/model/rest";

export function HistoryContent(props: any) {
    const userService = props.userService
    const [operationType, setOperationType] = useState('')
    const [isAddButtonClicked, setAddButtonClicked] = useState(false)
    const [operationDate, setOperationDate] = useState('')
    const [selectedCoin, setCoin] = useState('')
    const [coinValue, setCoinValue] = useState(0)
    const [coinAmount, setCoinAmount] = useState(0)
    const [userComment, setUserComment] = useState('')
    const [allUserTransactions, setAllUserTransactions] = useState([
        new Transaction('deposit', 'od babuni', new Date(2013, 2, 12), 'BTC', 1, 22689.00, 1),
        new Transaction('deposit', 'od dziadka', new Date(2017, 5, 12), 'LUNA', 123123131, 0.1, 1),
        new Transaction('deposit', 'od brate', new Date(2011, 12, 12), 'XRP', 12313.23, 0.41, 1),
        new Transaction('deposit', 'od babuni', new Date(2013, 2, 12), 'BTC', 1, 0.41, 1),
    ])

    const coinOptions: Array<Coin> = [
        new Coin('BTC', 22689.00),
        new Coin('ETH', 22689.00),
        new Coin('XRP', 0.41),
        new Coin('LUNA', 0.01),
        new Coin('BTCGOLD', 89.00)
    ]

    const renderAllUserHistory = () => {
        return allUserTransactions.map((transaction, index) => {
            const type = transaction.getType()
            const amount = transaction.getAmount()
            const coin = transaction.getCoin()
            const value = transaction.getValue()
            const comment = transaction.getComment()
            const date = new Date(transaction.getDate()).toLocaleDateString()

            return <HistoryItem
                type={type}
                amount={amount}
                coin={coin}
                value={value}
                comment={comment}
                date={date}
                key={index}
            />
        })
    }

    const setCoinNameAndValue = (event: any) => {
        event.preventDefault()
        const coinName = event.target.value

        setCoin(coinName)
    }

    const findSelectedCoinValue = () => {
        return selectedCoin ? coinOptions.find(coinOptions => coinOptions.getName() === selectedCoin)!.getValue() : 0
    }

    const setUserCoinValue = (event: any) => {
        event.preventDefault()

        return setCoinValue(parseInt(event.target.value))
    }

    const addTransaction = (event: any) => {

        const selectedCoinValue = findSelectedCoinValue()

        setCoinValue(selectedCoinValue)
        console.log(operationType + 'operation type')
        console.log(userComment + 'userComment')
        console.log(operationDate + 'date')
        console.log(coinValue + 'coin value')
        console.log(selectedCoinValue + 'coin value')
        console.log(selectedCoin + 'selected Coin')
        console.log(coinAmount + 'coin Amount')

        if (operationType && selectedCoin && coinValue && coinAmount) {
            setAllUserTransactions([...allUserTransactions,
                (new Transaction(operationType, userComment, new Date(2013, 2, 12),
                    selectedCoin, coinAmount, coinValue, 1))])
            setAddButtonClicked(!isAddButtonClicked)
        }
    }

    return (
        <div className={'dashboard'}>
            {
                isAddButtonClicked ?
                    <form className={'new-transaction'}>
                        <div className={'new-transaction__container'}>
                            <label className={'new-transaction__container--title'}>Type</label>
                            <div>
                                <select
                                    value={operationType}
                                    onChange={(event) => setOperationType(event.target.value)}
                                    required={true}
                                >
                                    <option value={''}></option>
                                    <option value={'deposit'}>deposit</option>
                                    <option value={'withdraw'}>withdraw</option>
                                </select>
                            </div>
                        </div>
                        <div className={'new-transaction__container'}>
                            <label className={'new-transaction__container--title'}>Date</label>
                            <input
                                type={'date'}
                                min="2011-01-01"
                                onChange={(event) => setOperationDate(event.target.value)}
                                required
                            />
                        </div>
                        <div className={'new-transaction__container'}>
                            <label className={'new-transaction__container--title'}>Select Coin</label>
                            <select
                                value={selectedCoin}
                                onChange={(event) => setCoinNameAndValue(event)}
                                required
                            >
                                {<option
                                    value={''}
                                >
                                    {''}
                                </option>}

                                {
                                    coinOptions.map((coin, index) => (
                                        <option
                                            value={coin.getName()}
                                            key={index}
                                        >
                                            {coin.getName()}
                                        </option>
                                    ))
                                }
                            </select>
                            <label className={'new-transaction__container--title'}>Value</label>
                            <input
                                type={'number'}
                                onChange={(event) => setUserCoinValue(event)}
                                placeholder={String(findSelectedCoinValue()) + ' USD'}
                            >
                            </input>
                            <label className={'new-transaction__container--title'}>Amount</label>
                            <input
                                type={'number'}
                                onChange={(event) => setCoinAmount(parseInt(event.target.value))}
                                placeholder={`0 ${selectedCoin}`}
                                required
                            >
                            </input>
                        </div>
                        <div
                            className={'new-transaction__container'}
                        >
                            <label className={'new-transaction__container--title'}>Comment</label>
                            <textarea
                                style={{height: '50px'}}
                                onChange={(event) => setUserComment(event.target.value)}
                                placeholder={'Transaction Comment'}
                                className={'new-transaction__container--comment'}
                            />
                        </div>
                        <button
                            type={'submit'}
                            onClick={event => addTransaction(event)}
                        >
                            save
                        </button>
                    </form>
                    : null
            }
            <div style={{height: '10%'}}></div>
            <div className={'history'}>
                <button style={{left: '200px'}} onClick={() => setAddButtonClicked(!isAddButtonClicked)}>Add</button>
                <div className={'history__container'}>
                    <div className={'history__navigation'} style={{fontWeight: 'bold'}}>
                        <p className={'history__navigation--item'}>Type</p>
                        <p className={'history__navigation--item'}>Amount</p>
                        <p className={'history__navigation--item'}>Coin</p>
                        <p className={'history__navigation--item'}>Value</p>
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
            <p className={'history__navigation--item'}>{props.amount}</p>
            <p className={'history__navigation--item'}>{props.coin}</p>
            <p className={'history__navigation--item'}>{`${props.value} USD`}</p>
            <p className={'history__navigation--item'}>{props.comment}</p>
            <p className={'history__navigation--item'}>{props.date}</p>
        </div>
    )
}
