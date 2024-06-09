type NewComponentProps = {
    students: Array<StudentProps>
}

type StudentProps = {
    id: number,
    name: string,
    age: number
}




export const NewComponent = ({students}:NewComponentProps) => {
    return (
        <>
            <ul>
                {students.map((student, index) => {
                    return (
                        <>
                            <li key={student.id}>
                                <span>{student.name} </span>
                                <span>age: {student.age}</span></li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}