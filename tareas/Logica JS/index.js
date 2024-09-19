
// SUMA

// let numero = Number(prompt('Ingrese un numero'));
// while(!numero || isNaN(numero)){
//     numero = prompt ('Ingrese un numero valido');
// }

// let numero2 = Number(prompt('Ingrese otro numero'));
// while(!numero2 || isNaN(numero2)){
//     numero2 = prompt ('Ingrese un numero valido');
// }
// let suma= Number(numero) + Number(numero2);

// alert(`la suma de ${numero} y ${numero2} es igual a: ${suma}`);


//NUMERO SECRETO

let secreto = 5;
let numero;

do {

    let numero = Number(prompt('Ingrese un numero del 1 al 10'));
    
    if (isNaN(numero) || numero == '' || numero < 1 || numero > 10) {
        alert('Ingrese un numero valido');
    }
    else if (numero > secreto) {
        alert('te pasaste!');
    }
    else if (numero < secreto) {
        alert('te falta un poco mas!');
    }
    else if (numero === secreto) {
        alert('numero correcto');
        break;
    }
} while (numero!=secreto) ;



//VERIFICAR EDAD

// let edad = Number(prompt ('Ingrese su edad'))
// if (isNaN(edad) || edad == '' || edad <= 0 || !Number.isInteger(edad) || edad > 100) {
//     alert('Ingrese una edad valida')
// }
// else if (edad >= 18)
//     alert('Usted es mayor de edad')
// else {
//     alert('Usted es menor de edad')
// }