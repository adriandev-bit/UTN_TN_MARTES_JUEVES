//TAREA

//Imprime los números del 1 al 10

// function numeros(){
//         for (let i = 0; i <= 10; i++){
//             console.log(`i: ${i}`);
//         }
// }

// numeros()

//Imprime los números pares del 2 al 20

// function numerosPares(){
//         for (let i = 1; i >0 && i <= 20; i++){
//             if(i%2 == 0){
//                 console.log(`i: ${i}`);
//             }

//         }
// }

// numerosPares()

//Imprime los números impares del 1 al 19


// function numerosImpares(){
//         for (let i = 1; i >0 && i <= 20; i++){
//             if(i%2 !== 0){
//                 console.log(`i: ${i}`);
//             }

//         }
// }

// numerosImpares()

//Imprime los números del 10 al 1 en orden inverso

// function inverso(){
//         for (let i = 10; i > 0; i--){
//           console.log(`i: ${i}`);    
// }
// }

// inverso()


//Imprime los números del 1 al 10, pero se detiene al llegar al 5

// function detiene() {
//     for (let i = 1; i < 10; i++) {
//         console.log(`i: ${i}`);
//         if (i == 5) {
//             break;
//         }
//     }
// }

// detiene()

//Imprime los números del 1 al 10, pero salta el 5

// function salta() {
//     for (let i = 1; i < 10; i++) {
//         if (i == 5) {
//             continue;
//         }
//         console.log(`i: ${i}`);
//     }
// }
// salta()


//Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre

// function decirNombre(nombre){
//         alert(`Hola ${nombre}`);
// }
// decirNombre('Adrian')

//Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta

// function saludar(nombre){

//     alert(`Hola ${nombre}`);
// }
// let nombre = prompt('Ingrese un nombre')
// saludar(nombre)

//Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b

// function sumar(a,b){
//     return a + b;
// }
// let suma = sumar(2,50)
// alert(`La suma es: ${suma}`)

//Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

// function restar(a,b){
//     return a - b;
// }
// let resta = restar(200,50)
// alert(`La suma es: ${suma}`)

//Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación 
//es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 

// function calcular (operacion,a,b){
//     if (operacion == 'suma'){
//         let suma = sumar(a,b);
//         return suma;
//     }
//     else if (operacion == 'resta'){
//         let resta = restar(a,b);
//         return resta;
//     }
//     else{
//         return null;
//     }
// }
// let resultado = calcular('multiplicar',400,12)
// alert(`La operacion da: ${resultado}`)


//Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

// function contarHasta (numero){
//     for (let i=0; i< numero;i++){
//         console.log(i);
//     }
        
// }
// let numero = 8;
// contarHasta (numero);

//Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. 
//Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función 
//calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver 
//a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

// respuesta = prompt('¿Quiere usar la calculadora?')
// while(respuesta == 'si'){
//     let numero1 = Number(prompt('Ingrese nuemero 1'));
//     let numero2 = Number(prompt('Ingrese nuemero 2'));
//     let operacion = prompt('Ingrese operacion');
//     let resultado
    
//     function calcular (numero1, numero2, operacion){
//         if (operacion == 'sumar'){
//             resultado = numero1 + numero2;
//         }
//         else if (operacion == 'restar'){
//             resultado = numero1 - numero2;
//         }
//         else{
//             alert('Operacion invalida')
//         }
//         return resultado;
//     }
    
//     calcular(numero1, numero2, operacion)
//     alert(`el resultado de la operacion es ${resultado}`)

// respuesta = prompt('¿Quiere usar la calculadora?')
// if (respuesta != 'si'){ 
//     alert('El programa ha finalizado')
// }
// }

// Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no

// function imprimir(){
//     let serie = 11
//     for (let i=0; i < 25; i++){
//         console.log(serie,i)
//         serie = serie + 11   
//     }
// }
// imprimir()


//hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y 
//cuántos impares.e ingresan valores por teclado.

// let vector = []
// for (let i= 0; i< 5; i++){
// let entero = prompt('Ingrese un numero entero')
// if(entero %1 === 0){
//     vector.push(entero);
// }
// }
// console.log(vector)

// function contarPares(vector)
// {
// let contadorPar = 0;
// let contadorImpar = 0;
// for(let i = 0; i < vector.length; i++){
//     let numero = vector[i];
    
//     if(numero % 2 == 0){
//         console.log(`el numero ${numero} es par`)
//         contadorPar ++;
//     }
//     else if(numero % 2 !== 0){
//         console.log(`el numero ${numero} es impar`)
//         contadorImpar ++;
//     }
// }
// return [contadorPar, contadorImpar];
// }

// let cuenta = contarPares(vector)
// console.log(`la cuenta de numeros pares es: ${cuenta[0]}`)
// console.log(`la cuenta de numeros impares es: ${cuenta[1]}`)


//Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. 
//Mostrar la altura promedio de las personas. 

// let alturas = []
// for (let i = 0; i < 5; i++){
//     let altura = parseFloat(prompt (`Ingrese altura de persona ${i}`))
//     if(altura > 0 && !isNaN(altura)){
//     alturas [i] = altura;
//     }
//     else {
//         alert('Ingrese una altura valida')
//         i--
//     }
// }
// function promedio (alturas){
//     let suma = 0
//     for(let i = 0; i < alturas.length; i++){
//         suma = suma + alturas[i];
//     }
//     let resultado = suma / alturas.length;
//     return resultado;
// }
// let resultadoFinal = promedio(alturas);
// alert(`El promedio de las alturas es ${resultadoFinal}`);
// document.write(`
//     <h3>Hola mundo</h3>
//     <p>El promedio de las alturas es de: ${resultadoFinal}</p>
//     `)


  /*
  Se cuenta con la siguiente información:
	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
  */

// let edadesManana = []
// for (let i = 0; i < 5; i++){
//     let edad = Number(prompt (`Ingrese edad curso mañana de persona ${i+1}`))
//     if(edad > 0 && !isNaN(edad)){
//         edadesManana [i] = edad;
//     }
//     else {
//         alert('Ingrese una altura valida')
//         i--
//     }
// }

// let edadesTarde = []
// for (let i = 0; i < 5; i++){
//     let edad = Number(prompt (`Ingrese edad curso tarde de persona ${i+1}`))
//     if(edad > 0 && !isNaN(edad)){
//         edadesTarde [i] = edad;
//     }
//     else {
//         alert('Ingrese una altura valida')
//         i--
//     }
// }

// let edadesNoche = []
// for (let i = 0; i < 5; i++){
//     let edad = Number(prompt (`Ingrese edad curso noche de persona ${i+1}`))
//     if(edad > 0 && !isNaN(edad)){
//         edadesNoche [i] = edad;
//     }
//     else {
//         alert('Ingrese una altura valida')
//         i--
//     }
// }


// function promedio (variable){
//     let suma = 0
//     for(let edad of variable){
//         suma = suma + variable[edad];
//     }
//     let resultado = suma / variable.length;
//     return resultado;
// }

// let promedioM = promedio(edadesManana)
// let promedioT = promedio(edadesTarde)
// let promedioN = promedio(edadesNoche)


// alert(`El promedio de las alturas del curso de la mañana es ${promedioM}`);
// alert(`El promedio de las alturas del curso de la tarde es ${promedioT}`);
// alert(`El promedio de las alturas del curso de la noche es ${promedioN}`);


//Crear una funcion que me permita dado un id, obtener la posicion del elemento en el array. SI no lo encuentra debe devolver -1
//obtenerPosicionDelProductoPorId(2) //retorna 1
//obtenerPosicionDelProductoPorId(20) //retornar -1
//Recomendacion: Ver que bucle conviene usar

// let array = [2,5,3]
// function obtenerPosicionDelProductoPorId(id){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] == id){
//             return i;
//         }  
// }
// return -1;
// }
// console.log(obtenerPosicionDelProductoPorId(30))

