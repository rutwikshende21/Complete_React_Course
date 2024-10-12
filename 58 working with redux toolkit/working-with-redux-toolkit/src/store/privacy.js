import { createSlice } from "@reduxjs/toolkit";

// creating a slice for privacy
const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    // giving all actions of privacy slice inside below reducer
    reducers: {
        toggle: (state) => {
            return state = !state;
        }
    }
})

// exporting the actions of our slices
export const privacyActions = privacySlice.actions;

export default privacySlice;