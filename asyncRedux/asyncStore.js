const redux = require('redux');
const reduxLogger = require('redux-logger');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');

const { usersReducer } = require("./asyncReducers");
const { getUserFail, getUserRequest, getUserSuccess } = require('./asyncActions');

const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

const logger = reduxLogger.createLogger();


const rootReducer = combineReducers({
    usersStore: usersReducer
});


const fetchUsers = () => {
    return function (dispatch) {
        dispatch(getUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then((resp) => {
            const usersIdArr = resp.data.map(user => user.id)
            dispatch(getUserSuccess(usersIdArr));
        }).catch((err) => {
            dispatch(getUserFail(err.message));
        })
    }
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

console.log('Initial State : ', store.getState());

const unsubscribe = store.subscribe(() => { console.log(store.getState()) });

store.dispatch(fetchUsers());

// unsubscribe();