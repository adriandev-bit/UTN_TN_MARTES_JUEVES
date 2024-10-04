/*
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
*/

// let url = prompt('Ingrese url')
// let ssl = 'https://'
// let nossl = 'http://'

// if (url.includes(ssl)){
//     alert('la url ingresada, cuenta con certificado ssl')
// }
// else if (url.includes(nossl)){
//     alert('la url ingresada, no cuenta con certificado ssl')
// }
// else {
//     alert('no has ingresado una url valida')
// }


/*Dado los siguientes texto 
"hola%20como%20estas,%20todo%bien?" 
"no%20me%20siento%20bien"
"que%20mal"

descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar

"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18

Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo"
*/

// let mensaje1 = "hola%20como%20estas,%20todo%bien?" ;
// let mensaje2 = "no%20me%20siento%20bien" ;
// let mensaje3 = "que%20mal" ;

// function descifrarCodigo(mensaje){
//     let descifrado = mensaje.replaceAll('%20',' ').replaceAll('%',' ')
//     return descifrado;
// }
// codigoDescifrado = descifrarCodigo(mensaje1)
// alert("El codigo descifrado es: " + codigoDescifrado)

// if(codigoDescifrado.length < 8 && codigoDescifrado.length > 1){
//     alert("el mensaje es corto")
// }
// else if(codigoDescifrado.length < 18 && codigoDescifrado.length > 9 ){
//     alert("el mensaje es mediano")
// }
// else if(codigoDescifrado.length > 18){
//     alert("el mensaje es largo")
// }

// if (codigoDescifrado.includes(',') || codigoDescifrado.includes('@') || codigoDescifrado.includes('-')){
//     alert("el mensaje es complejo")
// }
// else {
//     alert("el mensaje no es complejo")
// }


//solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
//con el algoritmo anterior. 

// let mensaje = prompt('Ingrese mensaje a cifrar')
// let mensajeCifrado = mensaje.replaceAll(' ','%20')
// alert("El mensaje cifrado es: " + mensajeCifrado)


// codigoDescifrado = descifrarCodigo(mensajeCifrado)
// alert("El codigo descifrado es: " + codigoDescifrado)

// function descifrarCodigo(mensaje){
//     let descifrado = mensaje.replaceAll('%20',' ').replaceAll('%',' ')
//     return descifrado;
// }

//Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
//una maysucula, sino decir "tiene minuscula"

let palabra = prompt('Ingrese palabra')
