import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { increment, decrement } from './CounterSlice';

export const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    const onClickIncrement = () => {
        dispatch(increment());
    }

    const onClickDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <p>Count: {count}</p><br />
            <button onClick={onClickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>
        </div>
    );
}
