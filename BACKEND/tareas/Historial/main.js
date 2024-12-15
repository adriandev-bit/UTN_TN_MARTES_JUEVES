// # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript
var Historial = /** @class */ (function () {
    function Historial(id, nombre, descripcion, fecha) {
        if (id === void 0) { id = 1; }
        if (nombre === void 0) { nombre = 'Inicio sesión'; }
        if (descripcion === void 0) { descripcion = 'Primer acceso al sistema'; }
        if (fecha === void 0) { fecha = new Date(); }
        this.historial = [];
        this.nombre = nombre;
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Historial.prototype.agregarAccion = function (id, nombre, fecha, descripcion) {
        this.historial.push({ id: id, nombre: nombre, fecha: fecha, descripcion: descripcion });
    };
    Historial.prototype.eliminarAccionPorID = function (id) {
        this.historial = this.historial.filter(function (acciones) { return acciones.id !== id; });
    };
    // eliminarAccionPorID(id: number): void {
    //     // Busca la acción con el ID dado
    //     const accion = this.historial.find(accion => accion.id === id);
    //     // Si encuentra la acción, la elimina
    //     if (accion) {
    //         // Encontramos el índice del elemento
    //         const index = this.historial.indexOf(accion);
    //         // Eliminamos el elemento utilizando splice
    //         this.historial.splice(index, 1);
    //     }
    // }
    Historial.prototype.eliminarTodo = function () {
        this.historial = [];
    };
    Historial.prototype.mostrarHistorial = function () {
        return this.historial;
    };
    return Historial;
}());
// Crear una instancia del historial
var historial1 = new Historial();
// Mostrar el historial (debería estar vacío inicialmente)
console.log("Historial inicial: ", historial1.mostrarHistorial());
// Agregar más acciones
historial1.agregarAccion(2, 'Cambio de contraseña', new Date(), 'Cambio de contraseña de Juan');
historial1.agregarAccion(3, 'Cierre de sesión', new Date(), 'Cierre de sesión de Raúl');
// Mostrar historial después de agregar acciones
console.log("Historial después de agregar acciones: ", historial1.mostrarHistorial());
// Eliminar una acción por ID (por ejemplo, eliminar la acción con id 2)
historial1.eliminarAccionPorID(2);
// Mostrar historial después de eliminar una acción
console.log("Historial después de eliminar la acción con id 2: ", historial1.mostrarHistorial());
// Eliminar todas las acciones
historial1.eliminarTodo();
// Mostrar historial después de eliminar todas las acciones
console.log("Historial después de eliminar todas las acciones: ", historial1.mostrarHistorial());
