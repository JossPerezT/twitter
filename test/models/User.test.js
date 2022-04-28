const User = require("./../../app/models/User")
describe ("TDD para User class", () =>{
    test (`1. Crear un objeto para el ussuario`, () => {
        const user_Joss = new User (1, "jocelynperez", "Jocelyn", "bio")

        expect (user_Joss.id).toBe(1)
        expect(user_Joss.userName).toBe("jocelynperez")
        expect(user_Joss.name).toBe("Jocelyn")
        expect(user_Joss.bio).toBe("bio")
        expect(user_Joss.dateCreated).toBeDefined()
        expect(user_Joss.lastUpdated).toBeDefined()
    })
})