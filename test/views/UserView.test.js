const UserView = require('../../app/views/UserView')

describe ('Tests para UserView', () =>{
    test('Requerimiento 1: Al tener un valor null, se obtenga un error', () =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test ('Requerimeinto 2. Regresanto un objeto con un error al ingresar un nuevo usuario con propiedades inválidas', ()=>{
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
    test ('Requerimiento 3: Regresando un objeto con un error si no son todas las propiedaded requeridas', ()=>{
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })  
})