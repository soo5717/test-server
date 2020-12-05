const jwt = require('jsonwebtoken');
const { secretKey, options } = require('../config/secretKey');

module.exports = {
    create: async (user) => {
        console.log('토큰 생성 부분');
        const payload = {
            id: user.id,
            name: user.name
        };
        const token = {
            accessToken: jwt.sign(payload, secretKey, options)
        };
        console.log(secretKey);
        console.log(options);
        console.log(token);
        return token;
    }
}