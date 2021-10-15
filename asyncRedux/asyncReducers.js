const {
    FETCH_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_REQUEST
} = require("./constants");


const usersInitialState = {
    loading: false,
    userData: [],
    error: ''
}

const usersReducer = (state = usersInitialState, actions) => {
    const { payload, type } = actions;
    switch (type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: payload.showLoading };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: payload.showLoading, userData: payload.usersData };
        case FETCH_USER_FAIL:
            return { ...state, loading: payload.showLoading, error: payload.errorInfo };
        default:
            return usersInitialState;
    }
}

module.exports = { usersReducer };