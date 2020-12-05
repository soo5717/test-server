const jwt = require('jsonwebtoken');
const { secretKey, options } = require('../config/secretKey');

module.exports = {
    create: async (user) => {
        const payload = {
            id: user.id,
            name: user.name
        };
        const token = {
            accessToken: jwt.sign(payload, secretKey, options)
        };
        console.log(token);
        return token;
    }
}