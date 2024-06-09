type BodyProps = {
    titleforBody: string;
}

export const Body = ({titleforBody}:BodyProps) => {
    return (
        <div>{titleforBody}</div>
    )
}