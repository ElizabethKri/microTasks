
type ButtonProps = {
    name: string
    callBack: ()=>void
}

export const Button2 = ({name, callBack}: ButtonProps) => {
    const onClickHandler = () => {
        callBack()
    }
    return (
        <>
            <button onClick={onClickHandler}>{name}</button>
        </>
    )
}