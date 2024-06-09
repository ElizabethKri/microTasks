import {FilterType} from "./Filter";

type  currentMoneyProps = {
    currentMoney: Array<moneyProps>
    callback: (nameBtn: FilterType) => void
}

type moneyProps = {
    banknots: string,
    value: number,
    number: string
}

export const NewFilter = ({currentMoney, callback}: currentMoneyProps) => {

    const onClickFilterHandler = (nameBtn: FilterType) => {
        callback(nameBtn)
    }

    return(
        <>
            <ul>
                {currentMoney.map((money, index) => {
                    return (
                        <li key={index}>
                            <span>{money.banknots}</span>
                            <span>{money.value}</span>
                            <span>{money.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>ruble</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>dollar</button>
            </div>
        </>
            )
}