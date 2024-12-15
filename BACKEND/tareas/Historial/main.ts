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

type Acciones = 'Inicio sesión' | 'Cambio de contraseña' | 'Cierre de sesión' | 'Actualización de perfil';

class Historial {
    historial: { descripcion: string; id: number; nombre: Acciones; fecha: Date }[] = [];

    id: number;
    nombre: Acciones;
    fecha: Date;
    descripcion: string;
   
    constructor(
        id: number = 1,
        nombre: Acciones = 'Inicio sesión',
        descripcion: string = 'Primer acceso al sistema',
        fecha: Date = new Date(),
    ) {
        this.nombre = nombre
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }


    agregarAccion(id: number, nombre: Acciones, fecha: Date, descripcion: string ): void {
        this.historial.push({ id, nombre, fecha, descripcion })
    }

    eliminarAccionPorID(id: number): void {
        this.historial = this.historial.filter(acciones => acciones.id !== id);
    }

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
    

    eliminarTodo(): void {
        this.historial = [];
    }

    mostrarHistorial(): { id: number, nombre: Acciones, fecha: Date, descripcion: string  }[] {
        return this.historial;
    }
}


// Crear una instancia del historial
const historial1 = new Historial();

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
