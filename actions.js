const { BUY_CAKE, SELL_CAKE, BUY_ICE_CREAM } = require('./actionConstants');

const buyCakeAction = () => {
    return {
        type: BUY_CAKE,
        payload: {
            info: 'Decrease Amount of Cakes'
        }
    }
};

const sellCakeAction = () => {
    return {
        type: SELL_CAKE,
        payload: {
            info: 'Increase Amount of Cakes'
        }
    }
};

const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM,
        payload: {
            info: 'Decrease amount of Ice-creams'
        }
    }
}

module.exports = { buyCakeAction, sellCakeAction, buyIceCream };

