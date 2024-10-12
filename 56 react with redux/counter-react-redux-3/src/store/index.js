import { createStore } from "redux"

const INITIAL_VALUE = {
    counter: 0,
    privacy: false  // creating privacy element in our store, to handle privacy conditions
}

// handling the dispatched actions in our reducer
const counterReducer = (store = INITIAL_VALUE, action) => {
    if (action.type === 'INCREMENT') {
        return { counter: store.counter + 1, privacy: store.privacy };  // returning privacy also because we need to return all the elements in store, as we now have two elements in our store
    }
    else if (action.type === 'DECREMENT') {
        return { ...store, counter: store.counter - 1 }; // it is same as above handling, first laoding all the elements of store using spread operator '...', then making changes according to our condition, this is better than above, because if there are multiple elements in store, we don't need to return them separately, we can directly return whole store using spread operator, and then make changes according to our condition
    }
    else if (action.type === 'PRIVACY_TOGGLE') {
        return { ...store, privacy: !store.privacy };
    }
    else if (action.type === 'ADD') {
        return { ...store, counter: store.counter + Number(action.payload.num) };
    }
    else if (action.type === 'SUBTRACT') {
        return { ...store, counter: store.counter - Number(action.payload.num) };
    }

    return store;
}

// creating store
const counterStore = createStore(counterReducer);

export default counterStore;