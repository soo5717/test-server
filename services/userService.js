const { User } = require('../models')

module.exports = { 
    read: async () => {
        try{
            const users = await User.findAll({
                attributes: ['id', 'email', 'name']
            });
            return users;
        } catch(e) {
            throw e;
        }
    }
};