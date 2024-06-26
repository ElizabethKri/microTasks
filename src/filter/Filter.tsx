import {useState} from "react";
import {NewFilter} from "./NewFilter";

export type FilterType = 'all'| 'RUBLS'|'Dollars'


export const Filter = () => {

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

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money


    if(filter === 'Dollars'){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }

    if(filter === 'RUBLS'){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }


    const onClickFilterHandler = (nameBtn: FilterType) => {
        setFilter(nameBtn)
    }


    return (
        <>
            <NewFilter currentMoney={currentMoney} callback={onClickFilterHandler}/>
        </>
    )
}