const User = require('../models/User')

class UserService {
    static create (id, userName, name){
        return new User(id, userName, name,"Sin bio")
    }
    static getInfo(user){
        return Object.values(user)

    }
    static updateUserUserName (user, userName){
        return user.setUserName = userName
    }
    static getAllUserNames (users) {
        const listaUsers = users.map (user => user.userName)
        return listaUsers
    }
}


module.exports = UserService


