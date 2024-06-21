import {FilterBanknots} from "./Filter1";


type CurrentMoneyProps = {
    currentMoney : Array<MoneyProps>
    callback: (nameBtn: FilterBanknots) => void
}

type MoneyProps = {
    banknots: string,
    value: number,
    number: string
}



export const CurrentMoney = ({currentMoney, callback}: CurrentMoneyProps) => {

    const onClickHandlerFilter = (nameBtn: FilterBanknots) => {
        callback(nameBtn)
    }

    return (
        <>
            <ul>
                {currentMoney.map((moneyObject, index) => {
                    return (
                        <>
                            <li key={index}>
                                <span>{moneyObject.banknots}</span>
                                <span>{moneyObject.value}</span>
                                <span>{moneyObject.number}</span>
                            </li>
                        </>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={(event) => onClickHandlerFilter("All")}>All</button>
                <button onClick={(event) => onClickHandlerFilter("Dollars")}>Dollars</button>
                <button onClick={(event) => onClickHandlerFilter("RUBLS")}>RUBLS</button>
            </div>
        </>

    )
}