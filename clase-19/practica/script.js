/* 
Crear en HTML un span que tenga un id que sea 'resultado'

Solicitar al usuario 2 numeros y sumarlos (pueden usar propmts)
Mostrar en el texto del span: 'El resultado de sumar {numero1} y {numero2} es {resultado}'
*/


// let numero1 = Number(prompt('Ingrese numero a sumar'))
// let numero2 = Number(prompt('Ingrese otro numero a sumar'))
// let suma = numero1 + numero2


// let resultado = document.getElementById('resultado')
// resultado.innerText = 'La suma es igual a:' + suma


// const user_info = {
//     nombre: 'Adrian',
//     avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVE7CU3E-71a3d810fd8d-192',
//     mail: 'adrian@mail.com',
//     ultima_conexion: '20:20 (hora local)'
// }

// const user_info_HTML = document.getElementById('user_info')

// user_info_HTML.innerHTML = `
//     <div>  
//     <img src = '${user_info.avatar}'>
//     <h2>${user_info.nombre}</h2> 
//     </div>
//         <div>  
//     <div>Email: ${user_info.mail} </div>
//     <span>Email: ${user_info.ultima_conexion} </span>
//     </div>
// `


const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 0,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    }
]


const productsContainerHTML = document.getElementById('products-container')

/* 
Por cada producto del array de productos deberar crear un div y deberas guardarlo/acumularlo en el resultado
*/

let resultado = ''

for(const producto of productos ){

    //Si el producto cuesta mas de 5000 vamos a decir en un span que es muy caro
    let productoEsCaro = producto.precio > 5000
    let productoComprado = producto.comprado === true
    let productoHayStock = producto.stock > 0
    /* 
    Si producto esta comprado, entonces debera decir comprado en vez de comprar el boton. Caso contrario, siguira mostrando comprar
    */

    resultado = resultado + `
    <div>
        <h2>${producto.nombre}</h2>
        <span>Precio: $${producto.precio}</span><br>
     
        ${
            productoEsCaro 
            ? '<span>El producto es caro</span>'
            : ''
        }
                
        ${
            productoHayStock 
            ? `<span>Unidades disponibles: ${producto.stock}</span>
               <button>Comprar</button>`
            : `<span>Ya no quedan unidades disponibles</span>
               <button disabled>Comprado</button>`         
        }
        
        <hr>
    </div>
    `
}

productsContainerHTML.innerHTML = resultado  // Mostrar el HTML en la pagina