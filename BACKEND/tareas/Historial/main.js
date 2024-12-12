// # Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript
var Historial = /** @class */ (function () {
    function Historial(usuario, id, actividad, fecha) {
        if (usuario === void 0) { usuario = ''; }
        if (id === void 0) { id = 0; }
        if (actividad === void 0) { actividad = 'Inicio sesión'; }
        if (fecha === void 0) { fecha = new Date(); }
        this.acciones = [];
        this.usuario = usuario;
        this.id = id;
        this.actividad = actividad;
        this.fecha = fecha;
    }
    Historial.prototype.agregarAccion = function (usuario, id, actividad, fecha) {
        this.acciones.push({ usuario: usuario, id: id, actividad: actividad, fecha: fecha });
    };
    Historial.prototype.obtenerAcciones = function () {
        return this.acciones;
    };
    return Historial;
}());
var historial1 = new Historial();
historial1.agregarAccion('Carlos', 3, 'Cierre de sesión', new Date());
historial1.agregarAccion('juan', 4, 'Actualización de perfil', new Date());
console.log(historial1.obtenerAcciones());
