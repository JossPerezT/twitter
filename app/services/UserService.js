const User = require('../models/User')

class UserService {
    static create (id, userName, name){
        return new User(id, userName, name,"Sin bio")
    }
}


module.exports = UserService

const user = UserService.create (1, "jocelynperez", "Jocelyn")

console.log (user)