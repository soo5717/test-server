const userService = require('../services/userService');
const rb = require('../modules/responseBody');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');

module.exports = {
    signUp : async (req, res) => {
        const { email, pwd, name, country } = req.body;
        if(!email || !pwd || !name || !country){
            return res.status(sc.BAD_REQUEST).send(rb.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
        }
        try{
            const user = await userService.create(email, pwd, name, country);
            return res.status(sc.CREATED).send(rb.success(sc.CREATED, rm.SIGNUP_SUCCESS));
        } catch(e) {
            console.error(e);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(rb.fail(sc.INTERNAL_SERVER_ERROR, rm.SIGNUP_FAIL));
        }
    }
};