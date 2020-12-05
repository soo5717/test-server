const { User } = require('../models')

module.exports = { 
    signUp: async (email, pwd, name, country) => {
        try{
            const user = await User.create({
                email: email,
                pwd: pwd,
                name: name,
                country: country
            });
            return user;
        } catch(e) {
            throw e;
        }
    },
    signIn: async (email) => {
        try{
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            return user;
        } catch(e) {
            throw e;
        }
    }
};