import {MouseEvent} from "react";


export const Button = () => {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, I am Eliza!')
    // }
    // const mySecondSubscriber = () => {
    //     console.log('Hello, I am Ela!')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const onClickHandlerFoo1 = (event: MouseEvent<HTMLButtonElement>) => {
        //ничего не передаем
        console.log(100200)

    }

    const onClickHandlerFoo2 = (a: number) => {
        //передаем цифру 100200
        console.log(a)
    }

    return <>
        <button onClick={onClickHandlerFoo1}>1</button>
        <button onClick={(event) => onClickHandlerFoo2(100200)}>2</button>

        <button onClick={(event) => {console.log('Hello!')}}>My youtube chanel-1
        </button>
        <button onClick={event => onClickHandler('Ilia')}>My youtube chanel-2</button>
        <button onClick={event => onClickHandler('Ela')}>My youtube chanel-3</button>

    </>
}