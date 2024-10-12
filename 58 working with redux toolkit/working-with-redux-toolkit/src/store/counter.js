import { createSlice } from "@reduxjs/toolkit";

// creating a slice for counter 
const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    // giving all actions of counter slice inside below reducer
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload);
        },
        subtract: (state, action) => {
            state.counterVal -= Number(action.payload);
        }
    }
})

// exporting the actions of our slices
export const counterActions = counterSlice.actions;

export default counterSlice;