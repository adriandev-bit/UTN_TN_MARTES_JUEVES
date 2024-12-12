/*EJERCICIO:
Empleado
    -nombre: string
    -puesto: string
    -sueldo: number
    -area: string
    -presentarse: funcion(){Decir por consola 'Hola me llamo {nombre}, trabajo como {puesto} en el area de {area} y gano ${sueldo}}
    -obtenerSueldoNeto: funcion(){Debe devolver el sueldo menos el 18% (aportes)}
Crear 3 empleados y por consola verificar que funcionen los metodos
*/



// Definimos la clase Empleado
class Empleado {
    constructor(nombre, puesto, sueldo, area) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.sueldo = sueldo;
        this.area = area;
    }

    // Método para presentarse
    presentarse() {
        console.log(`Hola, me llamo ${this.nombre}, trabajo como ${this.puesto} en el área de ${this.area} y gano $${this.sueldo}`);
    }

    // Método para obtener el sueldo neto (18% de aportes)
    obtenerSueldoNeto() {
        let sueldoNeto = this.sueldo - (this.sueldo * 0.18);
        return sueldoNeto;
    }
}

// Crear tres empleados con los datos solicitados
let empleado1 = new Empleado("Juan Pérez", "Desarrollador", 3000, "Tecnología");
let empleado2 = new Empleado("Ana García", "Diseñadora", 2500, "Marketing");
let empleado3 = new Empleado("Carlos López", "Gerente", 4500, "Administración");

// Verificar los métodos en consola
empleado1.presentarse();
console.log(`Sueldo neto de ${empleado1.nombre}: $${empleado1.obtenerSueldoNeto()}`);

empleado2.presentarse();
console.log(`Sueldo neto de ${empleado2.nombre}: $${empleado2.obtenerSueldoNeto()}`);

empleado3.presentarse();
console.log(`Sueldo neto de ${empleado3.nombre}: $${empleado3.obtenerSueldoNeto()}`);




// Clase base Vehiculo
class Vehiculo {
    constructor(velocidad_en_km_x_hora, modelo, marca, color, precio) {
        this.velocidad_en_km_x_hora = velocidad_en_km_x_hora;
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
    }}

    // Clase Bicicleta que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    constructor(velocidad_en_km_x_hora, modelo, marca, color, precio, rodado, tipo_de_freno) {
        super(velocidad_en_km_x_hora, modelo, marca, color, precio);
        this.rodado = rodado;
        this.tipo_de_freno = tipo_de_freno;
    }}


    // Clase Auto que hereda de Vehiculo
class Auto extends Vehiculo {
    constructor(velocidad_en_km_x_hora, modelo, marca, color, precio, motor, puertas) {
        super(velocidad_en_km_x_hora, modelo, marca, color, precio);
        this.motor = motor;
        this.puertas = puertas;
    }}
    