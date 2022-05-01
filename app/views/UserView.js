const UserService = require('../services/UserService')

class UserView {
    static createUser (payload){
        if (payload === null){ 
            return { error:'payload no existe'}
        }
        if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number' ){
            return `Username: ${payload.username}. 
            Name: ${payload.name}. 
            ID: ${payload.id}`
        } else {
            return {error: 'necesitan tener un valor válido'}
        }
    }
}

module.exports = UserView