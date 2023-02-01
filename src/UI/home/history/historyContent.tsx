import React, {useEffect, useState} from "react";
import {Coin, Transaction} from "../../../backend-service-connector/model/rest";

export function HistoryContent(props: any) {
    const userService = props.userService
    const transactionService = props.transactionService
    const [operationType, setOperationType] = useState('')
    const [isAddButtonClicked, setAddButtonClicked] = useState(false)
    const [operationDate, setOperationDate] = useState(new Date())
    const [selectedCoin, setCoin] = useState('')
    const [coinPrice, setCoinPrice] = useState(0)
    const [coinAmount, setCoinAmount] = useState(0)
    const [userComment, setUserComment] = useState('')
    const [allUserTransactions, setAllUserTransactions] = useState<Array<Transaction> | null>(null)

    const coinOptions: Array<Coin> = [
        new Coin(undefined, 'BTC', 1000.00),
        new Coin(undefined, 'ETH', 2000.00),
        new Coin(undefined, 'XRP', 4.90),
        new Coin(undefined, 'LUNA', 1.007),
        new Coin(undefined, 'Cardano', 1.9)
    ]

    const getTransactions = async () => {
        const response: Array<any> = await transactionService.getAllUserTransactionsFromDb()

        return response.map((res: any) => {
            return new Transaction(res.id, res.type, res.comment, res.date, res.coin, res.amount, res.price, res.ownerId)
        })

    }

    useEffect(() => {
        getTransactions().then((response: any) => setAllUserTransactions(response))
    }, [])

    const renderAllUserHistory = () => {
        if (allUserTransactions) {
            return allUserTransactions.map((transaction, index) => {
                const type = transaction.getType()
                const amount = transaction.getAmount()
                const coin = transaction.getCoin()
                const price = transaction.getPrice()
                const comment = transaction.getComment()
                const date = new Date(transaction.getDate()).toLocaleDateString()

                return <HistoryItem
                    type={type}
                    amount={amount}
                    coin={coin}
                    price={price}
                    comment={comment}
                    date={date}
                    key={index}
                />
            })
        }
    }

    const setCoinNameAndValue = (event: any) => {
        event.preventDefault()

        const coinName = event.target.value

        setCoin(coinName)

        if (coinName) {
            const coinPrice = coinOptions.find(coin => coin.getName() === coinName)!.getPrice()
            setCoinPrice(coinPrice)
        } else {
            setCoinPrice(0)
        }
    }

    const addTransaction = (event: any) => {
        event.preventDefault()
        if (operationType && selectedCoin && coinPrice && coinAmount) {
            const newTransaction: Transaction = new Transaction(undefined, operationType, userComment, operationDate,
                selectedCoin, coinAmount, coinPrice, undefined)

            transactionService.addNewTransaction(newTransaction)
            setAddButtonClicked(!isAddButtonClicked)
            setAllUserTransactions([...allUserTransactions!, newTransaction])
        }
    }

    return (
        <div className={'dashboard'}>
            {
                isAddButtonClicked ?
                    <form className={'new-transaction'}>
                        <div
                            className={'new-transaction__container--exit'}
                            onClick={() => setAddButtonClicked(false)}
                        >
                            X
                        </div>
                        <label className={'new-transaction__container--title'}>New Transaction</label>
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
                                onChange={(event) => setOperationDate(new Date(event.target.value))}
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
                            <label className={'new-transaction__container--title'}>Price</label>
                            <input
                                type={'number'}
                                onChange={(event) => setCoinPrice(parseInt(event.target.value))}
                                placeholder={String(coinPrice) + ' USD'}
                            >
                            </input>
                            <label className={'new-transaction__container--title'}>Amount</label>
                            <input
                                type={'number'}
                                step={"0.0001"}
                                onChange={(event) => setCoinAmount(parseFloat(event.target.value))}
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
                        <p className={'history__navigation--item'}>Price</p>
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
            <p className={'history__navigation--item'}>{`${props.price} USD`}</p>
            <p className={'history__navigation--item'}>{props.comment}</p>
            <p className={'history__navigation--item'}>{props.date}</p>
        </div>
    )
}
