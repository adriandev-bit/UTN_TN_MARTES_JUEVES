// console.log('hola como estas')

const { leerArchivo, crearArchivo } = require("./filesystem")


// let numero_1 = 4
// let numero_2 = 10
// let precio = 100

// const {sumar, restar} = require('./matematica.js')


// console.log(sumar(numero_1, numero_2))
// console.log(restar(numero_1, numero_2))

// const calcIva = require('./utils/impuestos.js')
// console.log(calcIva(precio)) 


// function funcionProblematica(){
//     const numero_aleatorio = Math.random()
//     if(numero_aleatorio > 0.5){
//         console.log('La accion es correcta')
//         const numero_aleatorio = Math.random()
//         if(numero_aleatorio > 0.8){
//             console.log('La accion es correcta')
//         }else{
//             throw {message: 'Casi..'}
//         }
//     }else{
//         throw {message: 'No has tenido suerte'}
        
//     }
// }
// console.log('Ejecutando el archivo main.js')

// try{
//     funcionProblematica()
//     funcionProblematica()
// }
// catch(error){
//     console.log('Ocurrio un error en la funcionProblematica')
//     console.log(error)
// }
// console.log('Accion super importante')



// function validarCredenciales(){
//     const numero_aleatorio = Math.random()
//     if(numero_aleatorio > 0.5){
//         console.log('operacion realizada') 
//     }else{
//         throw {message:'credenciales invalidas'}
//     }
// }

// try{
//     validarCredenciales()
// }
// catch(error){
//     console.log('Ocurrio un error en la generacion de credenciales')
//     console.log(error)
// }

// const {crearArchivo, leerArchivo} = require('./filesystem.js')
// crearArchivo('./tes.txt', 'hola mundo desde node.js')
// console.log(leerArchivo('./test.txt'))

// console.log('accion importante')

// const configuracion = {
//     nivel_seguridad: 3,
//     user_root: 'admin',
//     password_root: 'admin2025'
// }

// crearArchivo('./config.json',JSON.stringify(configuracion))


const modificarNivelDeSeguridad = (nro_nivel) =>{
    try{
        const configuracion = JSON.parse(leerArchivo('./config.json'))
        configuracion.nivel_seguridad = nro_nivel
        crearArchivo('./config.json', JSON.stringify(configuracion))
    }catch(error){
        console.error('Error al modificar nivel de seguridad')
        console.log (error)
    }

}

modificarNivelDeSeguridad(11)