// # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Accion(id, descripcion, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        this.fecha = new Date();
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Accion.prototype.mostrarDetalle = function () {
        console.log("Acci\u00F3n ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
    };
    return Accion;
}());
var AccionInicioSesion = /** @class */ (function (_super) {
    __extends(AccionInicioSesion, _super);
    function AccionInicioSesion(id, dispositivo_origen, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        var _this = _super.call(this, id, 'Inicio de sesion', fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        return _this;
    }
    AccionInicioSesion.prototype.mostrarDetalle = function () {
        console.log("Acci\u00F3n ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
        console.log("Dispositivo de origen: ".concat(this.dispositivo_origen));
    };
    return AccionInicioSesion;
}(Accion));
var AccionCierreSesion = /** @class */ (function (_super) {
    __extends(AccionCierreSesion, _super);
    function AccionCierreSesion(id, dispositivo_origen, tiempo_de_sesion, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        var _this = _super.call(this, id, 'Cierre de sesion', fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        _this.tiempo_de_sesion = tiempo_de_sesion;
        return _this;
    }
    AccionCierreSesion.prototype.mostrarDetalle = function () {
        console.log("Acci\u00F3n ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
        console.log("Dispositivo de origen: ".concat(this.dispositivo_origen));
        console.log("Tiempo de sesion: ".concat(this.tiempo_de_sesion));
    };
    return AccionCierreSesion;
}(Accion));
var AccionActualizacionPerfil = /** @class */ (function (_super) {
    __extends(AccionActualizacionPerfil, _super);
    function AccionActualizacionPerfil(id, cambios, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        var _this = _super.call(this, id, 'Actualizaion de Perfil', fecha) || this;
        _this.cambios = cambios;
        return _this;
    }
    AccionActualizacionPerfil.prototype.mostrarDetalle = function () {
        console.log("Acci\u00F3n ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
        console.log("Cambios: ".concat(this.cambios));
    };
    return AccionActualizacionPerfil;
}(Accion));
var AccionCompra = /** @class */ (function (_super) {
    __extends(AccionCompra, _super);
    function AccionCompra(id, productos, total, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        var _this = _super.call(this, id, 'Lista de compra', fecha) || this;
        _this.productos = productos;
        _this.total = total;
        return _this;
    }
    AccionCompra.prototype.mostrarDetalle = function () {
        console.log("Acci\u00F3n ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
        console.log("Productos comprados: ".concat(this.productos));
        console.log("Total a pagar: ".concat(this.total));
    };
    return AccionCompra;
}(Accion));
var AccionEnvioMensaje = /** @class */ (function (_super) {
    __extends(AccionEnvioMensaje, _super);
    function AccionEnvioMensaje(id, destinatario, mensaje, fecha) {
        if (fecha === void 0) { fecha = new Date(); }
        var _this = _super.call(this, id, 'Envio de mensaje', fecha) || this;
        _this.destinatario = destinatario;
        _this.mensaje = mensaje;
        return _this;
    }
    AccionEnvioMensaje.prototype.mostrarDetalle = function () {
        console.log("Acci\u00F3n ID: ".concat(this.id));
        console.log("Descripci\u00F3n: ".concat(this.descripcion));
        console.log("Fecha: ".concat(this.fecha));
        console.log("Destinatario: ".concat(this.destinatario));
        console.log("Mensaje: ".concat(this.mensaje));
    };
    return AccionEnvioMensaje;
}(Accion));
var Historial = /** @class */ (function () {
    function Historial() {
        this.accion_id_counter = 0;
        this.acciones = [];
    }
    Historial.prototype.agregarAccion = function (accion) {
        this.acciones.push(accion);
    };
    Historial.prototype.eliminarAccionPorID = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; });
    };
    Historial.prototype.mostrarHistorial = function () {
        this.acciones.forEach(function (accion) { return accion.mostrarDetalle(); });
    };
    return Historial;
}());
// Crear una instancia de Historial
var historial = new Historial();
// Crear una acción de inicio de sesión
var accionInicioSesion = new AccionInicioSesion(1, "Laptop", new Date("2024-12-28T08:00:00"));
historial.agregarAccion(accionInicioSesion);
// Crear una acción de cierre de sesión
var accionCierreSesion = new AccionCierreSesion(2, "Smartphone", 120, new Date("2024-12-28T09:00:00"));
historial.agregarAccion(accionCierreSesion);
// Crear una acción de AccionEnvioMensaje
var accionEnvioMensaje = new AccionEnvioMensaje(3, "Cliente", "Su pago se realizo con exito", new Date("2024-12-28T09:00:00"));
historial.agregarAccion(accionEnvioMensaje);
// Crear una acción de Compra
var accionCompra = new AccionCompra(4, ["mouse", "teclado", "monitor"], 2000000, new Date("2024-12-28T09:00:00"));
historial.agregarAccion(accionCompra);
// Crear una acción de AccionActualizacionPerfil
var accionActualizacionPerfil = new AccionActualizacionPerfil(5, ["nombre", "contraseña", "foto de perfil"], new Date("2024-12-28T09:00:00"));
historial.agregarAccion(accionActualizacionPerfil);
// Mostrar el historial
console.log("Historial de acciones:");
historial.mostrarHistorial();
// Eliminar una acción por su ID (por ejemplo, la acción con ID 1)
historial.eliminarAccionPorID(1);
// Mostrar el historial nuevamente después de la eliminación
console.log("\nHistorial después de eliminar la acción con ID 1:");
historial.mostrarHistorial();
