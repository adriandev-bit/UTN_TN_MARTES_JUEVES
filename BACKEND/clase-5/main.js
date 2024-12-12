var Vehiculo = /** @class */ (function () {
    //Tipamos los parametros de la funcion constructora
    //La funcion constructora recibe los valores para CREAR un nuevo obj
    function Vehiculo(marca, precio, modelo, km_por_hora, anios_antiguedad) {
        this.marca = marca;
        this.anios_antiguedad = anios_antiguedad;
        this.precio_original = precio;
        this.precio = precio - precio * (0.05 * this.anios_antiguedad);
        this.modelo = modelo;
        this.km_por_hora = km_por_hora;
        this.terreno = 'TIERRA';
    }
    return Vehiculo;
}());
var renault12 = new Vehiculo('Reanult', 400000, 'Renault 12', 130, 3);
console.log(renault12);


