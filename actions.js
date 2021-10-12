const { BUY_CAKE } = require('./actionConstants');

const buyCakeAction = () => {
    return {
        type: BUY_CAKE,
        payload: {
            info: 'First Redux Actions'
        }
    }
};

module.exports = { buyCakeAction };

