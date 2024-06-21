import {useState} from "react";
import {CurrentMoney} from "./CurrentMoney";

export type FilterBanknots = "All" | "Dollars" | "RUBLS"

export const Filter1 = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    let currentMoney = money

    const [filter, setfilter] = useState<FilterBanknots>('All')

    if(filter === "RUBLS"){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS")
    }
    if(filter === "Dollars"){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars")
    }

    const onClickHandlerFilter = (nameBtn: FilterBanknots) => {
        setfilter(nameBtn)
    }


    return (
        <>
            <CurrentMoney currentMoney={currentMoney} callback={onClickHandlerFilter}/>
        </>

    )
}