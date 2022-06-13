import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface CounterSlice {
    value: number
}

const initialState: CounterSlice = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value;

export const counterReducer = counterSlice.reducer;