const UserView = require('../../app/views/UserView')

describe ('Tests para UserView', () =>{
    test('Requerimiento 1: Al tener un valor null, se obtenga un error', () =>{
        const payload = null 
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
})