const redux = require('redux');
// const { reducer } = require('./reducers');

const { iceCreamReducer, cakeReducer } = require('./reducers');
const { buyCakeAction, sellCakeAction, buyIceCream } = require('./actions');

const createStore = redux.createStore;

const combineReducers = redux.combineReducers;


const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

// const store = createStore(reducer);

const store = createStore(rootReducer);


console.log('Initial State : ', store.getState());

const unsubscribe = store.subscribe(() => { console.log('Updated State : ', store.getState()) });

store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());

store.dispatch(sellCakeAction());
store.dispatch(sellCakeAction());
store.dispatch(sellCakeAction());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());





unsubscribe();