import {useState} from "react";

export const UseState = () => {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandlerEmpty = () => {
        setA(0)
        console.log(0)
    }

    return (
        <>
          <h1>{a}</h1>
          <button onClick={onClickHandler}>number</button>
          <button onClick={onClickHandlerEmpty}>Обнуление</button>
        </>
    )
}