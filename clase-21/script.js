//USER: nombre, email, remuneracion, puesto, tipo_contrato
const users = [
    {
        nombre: 'Luis',
        email: 'GmI7t@example.com',
        remuneracion: 2000,
        puesto: 'Programador',
        tipo_contrato: 'Indefinido',
        id: 1
    },
    {
        nombre: 'Carlos',
        email: 'jFpCf@example.com',
        remuneracion: 3000,
        puesto: 'Diseñador',
        tipo_contrato: 'Indefinido',
        id: 2
    },
    {
        nombre: 'Ana',
        email: 'jFpCf@example.com',
        remuneracion: 4000,
        puesto: 'Analista',
        tipo_contrato: 'Temporal',
        id: 3
    },
    {
        nombre: 'Pedro',
        email: 'jFpCf@example.com',
        remuneracion: 5000,
        puesto: 'Gerente',
        tipo_contrato: 'Indefinido',
        id: 4
    }
]


// function filtrarProgramadores (usuarios) {
//     const programadores = []
//     for(let usuario of usuarios){
//         if(usuario.puesto === 'Programador'){
//             programadores.push(usuario)
//         }
//     }
//     return programadores
// }
// let resultado = filtrarProgramadores(users)

// console.log(resultado)


// //Traeme a los que cobran mas de 2500
// function filtrarUsuariosPorRemuneracion (usuarios, remuneracion){
//     const usuariosFiltrados = []
//     for(const usuario of usuarios){
//         if(usuario.remuneracion > remuneracion){
//             usuariosFiltrados.push(usuario)
//         }
//     }
//     return usuariosFiltrados
// }
// console.log(filtrarUsuariosPorRemuneracion(users, 2500))

function filter (lista, callbackFnCondicion){
    const result = []
    for(const elemento of lista){
        //Invoco a mi funcion y le paso el elemento
        if(callbackFnCondicion(elemento)){
            result.push(elemento)
        }
    }
    return result
}

function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 3500
}


const resultado = users.filter(
    function(usuario){
        return usuario.remuneracion > 2500
    }
)
console.log(resultado)


// //Ejemplo de callback con funcion anonima
// const resultado = users.filter(
//     function(usuario){
//         return usuario.remuneracion > 2500
//     }
// )
// //si un usuario tiene incluido en su nombre la C
// const resultado2 = users.filter(
//     function(user){
//         return user.nombre.includes('C')
//     }
// )
// console.log(resultado2)
// //Ejemplo de callback con funcion anonima
// const resultado = users.filter(
//     function(usuario){
//         return usuario.remuneracion > 2500
//     }
// )
// //si un usuario tiene incluido en su nombre la C
// const resultado2 = users.filter(
//     function(user){
//         return user.nombre.includes('C')
//     }
// )
// console.log(resultado2)