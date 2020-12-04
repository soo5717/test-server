const userController = {
    signUp : function(req, res) {
        let status = 400;
        res.json({
            'status' : status
        });
    }
};

module.exports = userController;