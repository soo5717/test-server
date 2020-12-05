const userService = require('../services/userService');
const sc = require('../modules/statusCode');
const rb = require('../modules/responseBody');

module.exports = {
    signUp : async (req, res) => {
        try{
            const users = await userService.read();
            return res.status(sc.OK).send(rb.success(sc.OK, '사용자 조회 성공', users));
        } catch(e) {
            console.error(e.message);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(rb.fail(sc.INTERNAL_SERVER_ERROR, '사용자 조회 실패'));
        }
    }
};