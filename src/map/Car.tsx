type CarsProps = {
    cars:  Array<CarProps>
}

type CarProps = {
    manufacturer: string,
    model: string
}


export const Car = ({cars}: CarsProps) => {
    return (
        <ul>
            {cars.map((car, index) => {
                return (
                    <>
                        <li key={index}>
                            <span>{car.manufacturer} </span>
                            <span>model: {car.model}</span>
                        </li>
                    </>
                )
            })}
        </ul>
    )
}