const { User } = require('../models')

module.exports = { 
    read: async () => {
        try{
            const users = await User.findAll({
                attributes: ['id', 'email', 'nam']
            });
            return users;
        } catch(e) {
            throw e;
        }
    }
};