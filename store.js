const redux = require('redux');
const reduxLogger = require('redux-logger');
// const { reducer } = require('./reducers');

const { iceCreamReducer, cakeReducer } = require('./reducers');
const { buyCakeAction, sellCakeAction, buyIceCream } = require('./actions');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const combineReducers = redux.combineReducers;

const logger = reduxLogger.createLogger();

const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer
})

// const store = createStore(reducer);

const store = createStore(rootReducer, applyMiddleware(logger));


console.log('Initial State : ', store.getState());

const unsubscribe = store.subscribe(() => { });

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