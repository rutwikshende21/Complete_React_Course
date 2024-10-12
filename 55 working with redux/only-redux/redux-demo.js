const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
}

// create a reducer
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;

    if (action.type === 'INCREMENT') {
        newStore = { counter: store.counter + 1 };
    }
    else if (action.type === 'DECREMENT') {
        newStore = { counter: store.counter - 1 };
    }
    else if (action.type === 'ADDITION') {
        newStore = { counter: store.counter + action.payload.number };
    }

    return newStore;
}

// create a store
const store = redux.createStore(reducer);

// create a subscriber
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

// subscribe the store with subscriber
store.subscribe(subscriber);

// creating an action(increasing/decreasing subscriber count of store) on store
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })

// creating an action with payload(adding payload number to the subscriber count of store) on store
store.dispatch({ type: 'ADDITION', payload: { number: 7 } })