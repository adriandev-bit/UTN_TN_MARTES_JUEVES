// class Vehiculo {
//     //Tipamos las propiedades del vehiculo
//     marca : string
//     precio : number
//     modelo : string
//     km_por_hora : number
//     terreno: string
//     anios_antiguedad: number
//     precio_original: number

//     //Tipamos los parametros de la funcion constructora
//     //La funcion constructora recibe los valores para CREAR un nuevo obj
//     constructor(
//         marca : string, 
//         precio : number, 
//         modelo : string, 
//         km_por_hora : number,
//         anios_antiguedad: number 
//     ){
//         this.marca = marca
//         this.anios_antiguedad = anios_antiguedad
//         this.precio_original = precio
//         this.precio = precio - precio * (0.05 * this.anios_antiguedad)
//         this.modelo = modelo
//         this.km_por_hora = km_por_hora
//         this.terreno = 'TIERRA'
//     }

//     moverse(horas: number) : void{
//         console.log(`El vehiculo ${this.modelo} a recorrido ${horas * this.km_por_hora} km!!`)
//     }
// }

// const renault12 = new Vehiculo('Reanult', 400000, 'Renault 12', 130, 3)

// console.log(renault12)
// renault12.moverse(5)


//Crear la class para hacer empleados
/* 
nombre
sueldo
fecha_contratacion
id_empleado

presentarse(){} es un metodo que hara una pequeña presentacion del empleado por consola
*/

type Puesto = 'Desarrollo' | 'Diseño' | 'Marketing' | 'PM' | 'RH'

class Empleado {
    nombre: string
    sueldo: number
    fecha_contratacion: Date
    id_empleado: number
    puesto: Puesto
    constructor(
        nombre: string,
        sueldo: number,
        fecha_contratacion: Date,
        id_empleado: number,
        puesto: Puesto
    ){
        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_contratacion = fecha_contratacion
        this.id_empleado = id_empleado
        this.puesto = puesto
    }

    presentarse() : void {
        console.log(`Hola mi nombres es ${this.nombre} soy ${this.puesto} mi ID es: ${this.id_empleado} mi sueldo es de:  ${this.sueldo}, ingrese en la fecha ${this.fecha_contratacion.getDate()}`)
    }
}

const empleado1= new Empleado('Pepe', 800000, new Date('2020/01/01'), 1122, 'Analista')
console.log(empleado1)
empleado1.presentarse()

class Pasante extends Empleado{
    tiempo_de_contrato_en_meses: number
    constructor(
        nombre: string,
        sueldo: number,
        fecha_contratacion: Date,
        id_empleado: number,
        puesto: Puesto,
        tiempo_de_contrato_en_meses: number
    ){
        super(nombre, sueldo, fecha_contratacion, id_empleado, puesto)
        this.tiempo_de_contrato_en_meses = tiempo_de_contrato_en_meses
    }

    presentarsePasante() : void {
        console.log(`Hola mi nombre es ${this.nombre} trabajo en  ${this.puesto} mi ID es: ${this.id_empleado} mi sueldo es de:  ${this.sueldo}, ingrese en la fecha ${this.fecha_contratacion.toLocaleDateString()} voy a trabajar durante ${this.tiempo_de_contrato_en_meses}`)
    }

    hacerCosasDePasantes(): void{
        if (this.puesto === 'Desarrollo') {
            console.log('Git push a produccion')
        }
        else{
            console.log('Pasante intenta usar la impresora')
        }
    }
}

const pasante1 = new Pasante ('Fulano', 950000, new Date('2023/01/01'), 25478, 'Desarrollo', 5)
pasante1.presentarsePasante()
pasante1.hacerCosasDePasantes()




