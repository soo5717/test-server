var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// [POST] 회원가입 
router.post('/signup', userController.signUp);
// [POST] 로그인
router.post('/signin', userController.signIn);

module.exports = router;
