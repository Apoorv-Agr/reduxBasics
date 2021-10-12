const { BUY_CAKE } = require('./actionConstants');

const initState = {
    numOfCakes: 20,
}

const reducer = (state = initState, action) => {
    console.log('action : ', action)
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        default:
            return initState;
    }
}

module.exports = { reducer };