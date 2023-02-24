import React, {useContext, useEffect, useState} from 'react'
import { Coin, Transaction } from '../../../backend-service-connector/model/rest'
import { THistoryItem } from '../dashboard/types'
import {TransactionServiceContext} from '../../../backend-service-connector/context'

export function HistoryContent(): JSX.Element {
  const transactionService = useContext(TransactionServiceContext)
  const [operationType, setOperationType] = useState<string>('')
  const [isAddButtonClicked, setAddButtonClicked] = useState<boolean>(false)
  const [operationDate, setOperationDate] = useState<Date>(new Date())
  const [selectedCoin, setCoin] = useState<string>('')
  const [coinPrice, setCoinPrice] = useState<number>(0)
  const [coinAmount, setCoinAmount] = useState<number>(0)
  const [userComment, setUserComment] = useState<string>('')
  const [allUserTransactions, setAllUserTransactions] = useState<Array<Transaction> | null>(null)
  const [allCoins, setAllCoins] = useState<Array<Coin> | null>(null)
  const [coinMaxAmount, setCoinMaxAmount] = useState<number | undefined>(undefined)

  const getTransactions = async () => {
    const response: Array<any> = await transactionService.getAllUserTransactionsFromDb()

    return response.map((res: any) => {
      return new Transaction(res.id, res.type, res.comment, res.date, res.coin, res.amount, res.price, res.ownerId)
    })
  }

  const getAllCoinsInfo = async () => {
    const response: Array<any> = await transactionService.getAllCoins()

    return response.map((res: any) => {
      return new Coin(undefined, res.name, res.price)
    })
  }

  const getUserCoin = async (coinName: string) => {

    return await transactionService.getUserCoin(coinName)
  }

  function History_Item({ type, amount, coin, price, comment, date, id }: THistoryItem) {

    return (
      <div className={'history__navigation'}>
        <input type={'checkbox'} id={String(id)} onClick={event => deleteUserTransaction(event)}></input>
        <p
          className={'history__navigation--item'}
          style={{ color: type === 'deposit' ? 'green' : 'red' }}
        >{type}</p>
        <p className={'history__navigation--item'}>{amount}</p>
        <p className={'history__navigation--item'}>{coin}</p>
        <p className={'history__navigation--item'}>{`${price} USD`}</p>
        <p className={'history__navigation--item'}>{comment}</p>
        <p className={'history__navigation--item'}>{date}</p>
      </div>
    )
  }

  useEffect(() => {
    getTransactions().then((response: Array<Transaction> | null) => setAllUserTransactions(response))
    getAllCoinsInfo().then((response: Array<Coin> | null) => setAllCoins(response))
  }, [])

  const renderAllUserHistory = () => {
    return allUserTransactions!.map((transaction, index) => {
      const type = transaction.getType()
      const id = transaction.getId()!
      const amount = transaction.getAmount()
      const coin = transaction.getCoin()
      const price = transaction.getPrice()
      const comment = transaction.getComment()
      const date = new Date(transaction.getDate()).toLocaleDateString()

      return <History_Item
        id={id}
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
  const setCoinNameAndValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()

    const coinName = event.target.value

    setCoin(coinName)
    getUserCoin(coinName)
      .then(response => setCoinMaxAmount(response.amount))

    if (coinName) {
      const coinPrice = allCoins!.find(coin => coin.getName() === coinName)!.getPrice()
      setCoinPrice(coinPrice)
    } else {
      setCoinPrice(0)
    }
  }

  const makeTransaction = () => {
    const newTransaction: Transaction = new Transaction(undefined, operationType, userComment, operationDate,
      selectedCoin, operationType === 'withdraw' ? -Math.abs(coinAmount) : Math.abs(coinAmount), coinPrice, undefined)

    transactionService.addNewTransaction(newTransaction).then(() => alert(`new ${operationType}`))
    setAddButtonClicked(!isAddButtonClicked)
    setAllUserTransactions([...allUserTransactions!, newTransaction])
    setCoinMaxAmount(0)
    setCoin('')
  }

  const checkTypeAndMaxAmountTransaction = () => {
    if (operationType === 'withdraw') {
      if (coinAmount <= Math.abs(coinMaxAmount!)) {
        makeTransaction()
      } else {
        alert('you dont have that much coin to withdraw')
      }
    } else if (operationType === 'deposit') {
      makeTransaction()
    }
  }

  const addTransaction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if (operationType && selectedCoin && coinPrice && coinAmount) {
      checkTypeAndMaxAmountTransaction()
    }
  }

  const deleteUserTransaction = (event: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
    const target = event.target as HTMLButtonElement
    const transactionId = target.id

    transactionService.deleteUserTransaction(parseInt(transactionId)).then(() => alert('transaction removed'))
    window.location.reload()
  }
  const setCorrectAmountOfCoin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoinAmount(parseFloat(event.target.value))
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
                min='2011-01-01'
                onChange={(event) => setOperationDate(new Date(event.target.value))}
                required
              />
            </div>
            <div className={'new-transaction__container'}>
              <label className={'new-transaction__container--title'}>Select Coin</label>
              <select
                value={selectedCoin}
                onChange={event => setCoinNameAndValue(event)}
                required
              >
                {<option
                  value={''}
                >
                  {''}
                </option>}

                {
                  allCoins!.map((coin, index) => (
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
                step={'0.0001'}
                onChange={(event) => setCorrectAmountOfCoin(event)}
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
                style={{ height: '50px' }}
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
      <div style={{ height: '10%' }}></div>
      <div className={'history'}>
        <button style={{ left: '200px' }} onClick={() => setAddButtonClicked(!isAddButtonClicked)}>Add</button>
        <div className={'history__container'}>
          <div className={'history__navigation'} style={{ fontWeight: 'bold' }}>
            <p className={'history__navigation--item'}>Type</p>
            <p className={'history__navigation--item'}>Amount</p>
            <p className={'history__navigation--item'}>Coin</p>
            <p className={'history__navigation--item'}>Price</p>
            <p className={'history__navigation--item'}>Comment</p>
            <p className={'history__navigation--item'}>Trade Date</p>
          </div>
          {
            allUserTransactions ? renderAllUserHistory() : null
          }
        </div>
      </div>
    </div>
  )
}
