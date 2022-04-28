const User = require("./../../app/models/User")
describe ("TDD para User class", () =>{
    test (`1. Crear un objeto para el ussuario`, () => {
        const user_Joss = new User ("jocelynperez", "Jocelyn", "bio", "dateCreated" )

        expect (user_Joss.id).toBe(1)
        expect(user_Joss.userName).toBe("jocelynperez")
        expect(user_Joss.name).toBe("Jocelyn")
        expect(user_Joss.bio).toBe("bio")
        expect(user_Joss.dateCreated).toBe("dateCreated")
        expect(user_Joss.lastUpdated).toBe("lastUpdated")
    })
})