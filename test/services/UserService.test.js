const UserService = require('../../app/services/UserService')

describe ('1. Test para UserService', ()=>{
    test ('Requerimiento 1. Crear un nuevo usuario',() => {
        const user = UserService.create (1, "jocelynperez", "Jocelyn")
        expect(user.userName).toBe("jocelynperez")
        expect(user.name).toBe("Jocelyn")
        expect(user.id).toBe(1)
        expect(user.bio).toBeDefined()
    })
    test ('Requerimiento 2: getInfo que regrese los valores de un objeto', () =>{
        const user = UserService.create (1, "jocelynperez", "Jocelyn")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("jocelynperez")
        expect(userInfoList[2]).toBe("Jocelyn")
        expect(userInfoList[3]).toBe("Sin bio")
        expect(userInfoList[4]).toBeDefined()
        expect(userInfoList[5]).toBeDefined()
    })
    test ('Requerimeinto 3: Actualizar el valor de userName', () =>{
        const user = UserService.create (1, "jocelynperez", "Jocelyn")
        UserService.updateUserUserName (user, "jocelynP")
        expect(userName).toBe("jocelynP")
    })
})