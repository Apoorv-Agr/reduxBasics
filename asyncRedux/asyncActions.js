const {
    FETCH_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_REQUEST
} = require("./constants");


const getUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
        payload: {
            showLoading: true
        }
    }
}

const getUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {
            usersData: users,
            showLoading: false
        }
    }
}

const getUserFail = (error) => {
    return {
        type: FETCH_USER_FAIL,
        payload: {
            errorInfo: error,
            showLoading: false
        }
    }
}

module.exports = { getUserFail, getUserRequest, getUserSuccess };

