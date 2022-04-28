const User = require('../models/User')

class UserService {
    static create (id, userName, name){
        return new User(id, userName, name,"Sin bio")
    }
    static getInfo(id, userName, name, bio, dateCreated, lastUpdated){
        return Object.values(id, userName, name, bio, dateCreated, lastUpdated)

    }
}


module.exports = UserService


