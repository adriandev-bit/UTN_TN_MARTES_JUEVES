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

class Accion {
    id: number;
    descripcion: string;
    fecha: Date = new Date();

    constructor(id: number, descripcion: string, fecha: Date = new Date()) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    mostrarDetalle(): void {
        console.log(`Acción ID: ${this.id}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha: ${this.fecha}`);
    }
}

class AccionInicioSesion extends Accion {
    dispositivo_origen: string;

    constructor(id: number, dispositivo_origen: string, fecha: Date = new Date()) {
        super(id, 'Inicio de sesion', fecha); 
        this.dispositivo_origen = dispositivo_origen;
    }

    mostrarDetalle(): void {
        console.log(`Acción ID: ${this.id}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Dispositivo de origen: ${this.dispositivo_origen}`);
    }
}

class AccionCierreSesion extends Accion {
    dispositivo_origen: string;
    tiempo_de_sesion: number;

    constructor(id: number, dispositivo_origen: string, tiempo_de_sesion: number, fecha: Date = new Date()) {
        super(id, 'Cierre de sesion', fecha); 
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_sesion = tiempo_de_sesion;
    }

    mostrarDetalle(): void {
        console.log(`Acción ID: ${this.id}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Dispositivo de origen: ${this.dispositivo_origen}`);
        console.log(`Tiempo de sesion: ${this.tiempo_de_sesion}`);
    }
}

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;

    constructor(id: number, destinatario: string, mensaje: string, fecha: Date = new Date()) {
        super(id, 'Envio de mensaje', fecha); 
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }

    mostrarDetalle(): void {
        console.log(`Acción ID: ${this.id}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Destinatario: ${this.destinatario}`);
        console.log(`Mensaje: ${this.mensaje}`);
    }
}

class Historial {
    accion_id_counter: number;
    acciones: Accion[];     //array de objetos de tipo Accion

    constructor() {
        this.accion_id_counter = 0;
        this.acciones = [];
    }

    agregarAccion(accion: Accion): void {
        this.acciones.push(accion);
    }

    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter(accion => accion.id !== id);
    }

    mostrarHistorial(): void {
        this.acciones.forEach(accion => accion.mostrarDetalle());
    }
}



// Crear una instancia de Historial
const historial = new Historial();


// Crear una acción de inicio de sesión
const accionInicioSesion = new AccionInicioSesion(1, "Laptop", new Date("2024-12-28T08:00:00"));
historial.agregarAccion(accionInicioSesion)

// Crear una acción de cierre de sesión
const accionCierreSesion = new AccionCierreSesion(2, "Smartphone", 120, new Date("2024-12-28T09:00:00"));
historial.agregarAccion(accionCierreSesion)


// Crear una acción de AccionEnvioMensaje
const accionEnvioMensaje = new AccionEnvioMensaje(3, "Cliente", "Su pago se realizo con exito", new Date("2024-12-28T09:00:00"));
historial.agregarAccion(accionEnvioMensaje)


// Mostrar el historial
console.log("Historial de acciones:");
historial.mostrarHistorial();

// Eliminar una acción por su ID (por ejemplo, la acción con ID 1)
historial.eliminarAccionPorID(1);

// Mostrar el historial nuevamente después de la eliminación
console.log("\nHistorial después de eliminar la acción con ID 1:");
historial.mostrarHistorial();
