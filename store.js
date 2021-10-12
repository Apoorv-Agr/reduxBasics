const redux = require('redux');
const { reducer } = require('./reducers');
const { buyCakeAction } = require('./actions');

const createStore = redux.createStore;

const store = createStore(reducer);


console.log('Initial State : ', store.getState());

const unsubscribe = store.subscribe(() => { console.log('Updated State : ', store.getState()) });

store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
unsubscribe();