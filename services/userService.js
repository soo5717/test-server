const { User } = require('../models')

module.exports = { 
    create: async (email, pwd, name, country) => {
        try{
            const user = await User.create({
                email: email,
                pwd: pwd,
                name: name,
                country: country
            });
            console.log(user);
            return user;
        } catch(e) {
            throw e;
        }
    }
};