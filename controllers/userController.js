// const connect = require('../config/database');

const userController = {
    signUp : function(req, res) {
        let status = 400;
        // connect.query('SELECT * FROM users', function(err, result){
        //     if(err){
        //         console.log(err);
        //     } else {
        //         status = 100;
        //     }

        //     res.json({
        //         'status' : status
        //     });
        // });
        res.json({
            'status' : status
        });
    }
};

module.exports = userController;