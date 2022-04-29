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
        const user_joss = UserService.create (1, "jocelynperez", "Jocelyn")
        UserService.updateUserUserName (user_joss, "jocelynP")
        expect(user_joss.userName).toBe("jocelynP")
    })
    test ('Requerimiento 2: Obtener una lista de todos los userNames de los objetos', ()=>{
        const user1 = UserService.create (1, "jocelynperez1", "Jocelyn")
        const user2 = UserService.create (2, "jocelynperez2", "Jocelyn")
        const user3 = UserService.create (2, "jocelynperez3", "Jocelyn")
        const userNames = UserService.getAllUserNames(user1,user2,user3)
        expect(userNames).toContain("jocelynperez1")
        expect(userNames).toContain("jocelynperez2")
        expect(userNames).toContain("jocelynperez3")

    })
})
