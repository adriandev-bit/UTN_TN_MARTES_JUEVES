const { escribirArchivoJSON } = require("./filesystem.util")

const guardarEnDB = (nombre_coleccion, JSON_data) => {
    escribirArchivoJSON(`./database/${nombre_coleccion}`, JSON_data)
}

module.exports = {guardarEnDB}