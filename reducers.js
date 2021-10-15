const { BUY_CAKE, SELL_CAKE, BUY_ICE_CREAM } = require('./actionConstants');
/* One way of doing with once reducer */
/* const initState = {
    numOfCakes: 20,
    numOfIceCreams: 40
}

const reducer = (state = initState, action) => {
    const { payload, type } = action;
    // console.log("payload : ", payload);
    switch (type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        case SELL_CAKE:
            return { ...state, numOfCakes: state.numOfCakes + 1 };
        case BUY_ICE_CREAM:
            return { ...state, numOfIceCreams: state.numOfIceCreams - 1 }
        default:
            return initState;
    }
} */

// create multiple reducers

const initialCakeState = {
    numberOfCakes: 20
}

const initialIceCreamState = {
    numberOfIceCreams: 40
}


const iceCreamReducer = (state = initialIceCreamState, action) => {
    const { payload, type } = action;
    switch (type) {
        case BUY_ICE_CREAM:
            return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 }
        default:
            return initialIceCreamState;
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    const { payload, type } = action;
    // console.log("payload : ", payload);
    switch (type) {
        case BUY_CAKE:
            return { ...state, numberOfCakes: state.numberOfCakes - 1 };
        case SELL_CAKE:
            return { ...state, numberOfCakes: state.numberOfCakes + 1 };
        default:
            return initialCakeState;
    }
}

module.exports = { iceCreamReducer, cakeReducer };
// module.exports = { reducer };