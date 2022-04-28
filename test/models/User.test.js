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
    test ("Getters", () =>{
        const user_Joss = new User ( 1, "jocelyn", "Jocelyn", "bio")
        expect(user_Joss.getUserName).toBe("jocelynperez")
        expect(user_Joss.getBio).toBe("bio")
        expect(user_Joss.getDateCreated).toBeDefined()
        expect(user_Joss.getLastUpdated).not.toBeUndefined()
    })
})