// instead of importing createStore from redux
// import configureStore from @reduxjs/toolkit;
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

// configuring the store, passing the slices to our store
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
});

export default counterStore;