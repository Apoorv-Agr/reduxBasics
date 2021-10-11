import { BUY_CAKE } from "./actionConstants"

const initState = {
    numOfCakes: 20,
}

const reduces = (state = initState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        default:
            return initState;
    }
}