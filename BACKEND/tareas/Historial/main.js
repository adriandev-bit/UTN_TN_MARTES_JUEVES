// # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript
// En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en TypeScript. 
//Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial 
//para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.
// ## Objetivo
// - **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
// - **Usar métodos avanzados de arrays** como filter, find, y findIndex para gestionar el historial.
// - **Aplicar conceptos de POO** como clases, objetos, métodos.
// ## Tareas
// 1. **Definir una clase Historial**:
//    - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
//    - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.
// 2. **Crear una clase Accion**:
//    - Cada acción será representada por una instancia de la clase Accion.
//    - Esta clase tendrá propiedades para id, descripcion y fecha, nombre.
// 3. **Crear métodos en la clase Historial**:
//    - **agregarAccion(accion)**: Método para agregar una nueva acción al historial.
//    - **eliminarAccionPorID(id)**: Método para eliminar una acción específica del historial usando su ID.
//    - **eliminarTodo()**: Método para eliminar todas las acciones del historial.
//    - **mostrarHistorial()**: Método para mostrar en la consola todas las acciones en el historial.
// ## EJEMPLOS
// HISTORIAL {
//    accion_id_counter: 0,
//    acciones: [] // Array de acciones
// }
// Accion {
//    id,
//    descripcion,
//    fecha,
//    nombre
// }
var Accion = /** @class */ (function () {
    function Accion(id, nombre, descripcion, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    return Accion;
}());
var Historial = /** @class */ (function () {
    function Historial() {
        this.accion_id_counter = 0;
        this.acciones = [];
    }
    Historial.prototype.agregarAccion = function (nombre, descripcion) {
        this.accion_id_counter++;
        var nuevaAccion = new Accion(this.accion_id_counter, nombre, descripcion);
        this.acciones.push(nuevaAccion);
    };
    Historial.prototype.eliminarAccionPorID = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; });
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
    };
    Historial.prototype.mostrarHistorial = function () {
        return this.acciones;
    };
    return Historial;
}());
// Pruebas
var historial = new Historial();
historial.agregarAccion('Inicio sesión', 'El usuario ha iniciado sesión.');
historial.agregarAccion('Cambio de contraseña', 'El usuario ha cambiado su contraseña.');
historial.agregarAccion('Cierre de sesión', 'El usuario ha cerrado sesión.');
console.log('Historial después de agregar acciones:');
console.log(historial.mostrarHistorial());
// Eliminar una acción por su id
historial.eliminarAccionPorID(2);
console.log('Después de eliminar la acción con ID 2:');
console.log(historial.mostrarHistorial());
// Eliminar todo el historial
historial.eliminarTodo();
console.log('Después de eliminar todo el historial:');
console.log(historial.mostrarHistorial());
