import React, {useState} from "react";

export function HistoryContent(props: any) {
    const userService = props.userService
    const [isAddButtonClicked, setAddButtonClicked] = useState(false)

    const navigation = [{
        type: 'Trade',
        buy: 0.0712837,
        crypto: 'XRP',
        sell: '',
        currSell: '',
        comment: 'BTC fall',
        date: '28.12.2017 01:15'
    }, {
        type: 'Income',
        buy: 1.000000123,
        crypto: 'BTC',
        sell: 0.123123,
        currSell: 'XRP',
        comment: 'XRP rate',
        date: '18.02.2022 11:25'
    },]

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
            {isAddButtonClicked ? AddTransaction() : null}
            <div style={{height: '10%'}}></div>
            <div className={'history'}>
                <button style={{left: '200px'}} onClick={() => setAddButtonClicked(!isAddButtonClicked)}>Add</button>
                <div className={'history__container'}>
                    <div className={'history__navigation'}>
                        <input type={'checkbox'} style={{display: 'none'}}/>
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
            <input type={'checkbox'}/>
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

function AddTransaction() {
    let operationType = 'Trade'

    const showOperationType = (e: any) => {
        e.preventDefault()
        console.log(operationType)
    }

    return (
        <div className={'new-transaction'}>
            <div className={'new-transaction__container'}>
                <form className={'new-transaction__type-container'}>
                    <input
                        type={'checkbox'}
                        value={'Trade'}
                        onChange={() => operationType = 'Trade'}

                    />
                    <label>Trade</label>
                    <input
                        type={'checkbox'}
                        value={'Incoming'}
                        onChange={() => operationType = 'Incoming'}
                    />
                    <label>Incoming</label>
                </form>
                <form>
                    <button onClick={(e) => showOperationType(e)}>Tak</button>
                </form>
                <div></div>
            </div>

        </div>
    )
}