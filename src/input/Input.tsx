import React, {ChangeEvent} from 'react';

type InputType = {
    setTitle: (title: string) => void,
    title: string
}

export const Input = ({setTitle,title }: InputType) => {

    const onChangeInputHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.currentTarget.value)
    }

    return (
            <input value={title} onChange={onChangeInputHandler}/>
    );
};

