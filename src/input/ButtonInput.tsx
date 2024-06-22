import React from 'react';

type ButtonInputType = {
    name: string,
    callback: () => void
}

export const ButtonInput = ({name, callback}: ButtonInputType) => {

    const onClickHandler = () => {
        callback()
    }

    return (
            <button onClick={onClickHandler}>{name}</button>
    );
};

