const userService = require('../services/userService');
const { User } = require('../models')
const statusCode = require('../modules/statusCode');
const responseBody = require('../modules/responseBody');

module.exports = {
    signUp : async (req, res) => {
        try{
            const users = await User.findAll({
                attributes: ['id', 'email', 'name']
            });
            console.log(users);
            return res.status(statusCode.OK).send(responseBody.success(statusCode.OK, '사용자 조회 성공', users));
        } catch(err) {
            console.error(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(responseBody.fail(statusCode.INTERNAL_SERVER_ERROR, '사용자 조회 실패'))
        }
    }
};