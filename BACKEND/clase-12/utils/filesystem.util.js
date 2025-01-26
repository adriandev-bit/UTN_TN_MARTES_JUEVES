const filesystem = require('fs');


// const escribirArchivoJSON = (nombre_archivo, JSON_data) =>{
//     try{
//         filesystem.writeFileSync(`${nombre_archivo}.json`, JSON.stringify(JSON_data), {encoding: 'utf-8'})
//     }
//     catch(error){
//         console.error(`Error al crear el archivo ${nombre_archivo}.json`)
//         console.log(error)
//     }
// }




// const escribirArchivoJSON = (nombre_archivo, JSON_data) => {
//     //asincronía con callbacks
//     filesystem.writeFile(
//         `${nombre_archivo}.json`, //nombre del archivo
//         JSON.stringify(JSON_data), //datos a guardar
//         {encoding: 'utf8'}, //configuración
//         ( error ) => { //El error es un objeto con el posible error de la función
//             if ( error ) {
//                 console.error('Error al escribir el archivo.')
//             } else {
//                 console.log('Archivo creado', nombre_archivo)
//                 filesystem.readFile(
//                     `${nombre_archivo}.json`,
//                     {encoding: 'utf8'},
//                     (error, resultado) => {
//                         if ( error ) {
//                             console.error('Error al leer archivo')
//                         } else {
//                             console.log('Resultado:', resultado)
//                         }
//                     }
//                 )
//             }
//         } //callback
//     ) //writeFile recibe nombre del archivo, datos a guardar, configuración y una callback (función que se va a ejecutar una vez realizada la acción).
// }


// module.exports = {escribirArchivoJSON}



// Crear un archivo llamado numero_1.txt e ingresar dentro de ese archivo un numero
// Crear un archivo llamado numero_2.txt e ingresar dentro de ese archivo un numero

// Leer el archivo con Node.js numero_1.txt
// Leer el archivo con Node.js numero_2.txt
// Sumar ambos numeros
// Escribir el resultado dentro de un archivo llamado resultado.txt




const leerArchivo = async (nombre_archivo) =>{
    try{
        const resultado = await filesystem.promises.readFile(
            nombre_archivo, 
            {encoding: 'utf-8'}
        )
        return resultado
    }
    catch(error){

    }
}

const calcularSumatoriaDeArchivos =async () =>{
    const numero_1 = await leerArchivo('numero_1.txt')
    const numero_2 = await leerArchivo('numero_2.txt')
    const resultado =  Number(numero_1) + Number(numero_2)
    filesystem.promises.writeFile('resultado.txt', String(resultado), {encoding: 'utf-8'})
} 

calcularSumatoriaDeArchivos();
module.exports = {calcularSumatoriaDeArchivos}




 