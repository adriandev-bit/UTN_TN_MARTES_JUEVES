const filesystem = require('fs')

const crearArchivo = (nombre, contenido) =>{
    try{
        filesystem.writeFileSync(
            nombre,
            contenido,
            {
                encoding: 'utf8'
            }
        )

    }
    catch(error){
        console.error('Error, el archivo no se pudo crear')
        console.log(error)
    }

}

const leerArchivo = (nombre) => {
   

    try{
        const result = filesystem.readFileSync(nombre,{encoding:'utf8'})
        return result

    }
    catch(error){

        console.log(error)
        throw {message:'El archivo no se pudo leer'}
    }
}

module.exports = {crearArchivo, leerArchivo}