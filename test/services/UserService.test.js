const UserService = require('../../app/services/UserService')

describe ('1. Test para UserService', ()=>{
    test ('Requerimiento 1. Crear un nuevo usuario',() => {
        const user = UserService.create (1, "jocelynperez", "Jocelyn")
        expect(user.userName).toBe("jocelynperez")
        expect(user.name).toBe("Jocelyn")
        expect(user.id).toBe(1)
        expect(user.bio).toBeDefined()
    })
})