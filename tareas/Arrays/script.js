
// let productos_vendidos_hoy  = [
//     'teclado','monitor','celular'
// ]

// for (let i = 0; i < productos_vendidos_hoy.length; i++){
//     console.log(`Has vendido ${productos_vendidos_hoy[i]} exitosamente`)
//     document.write() 
// }


// for (let i = 0; i < productos_vendidos_hoy.length; i++){
//    document.write( ` <div>
//           <h3>Has vendido  ${productos_vendidos_hoy[i]} exitosamente</h3>
//   <button>Ver estado de entrega</button>
//   <hr>
// </div>`)
// }

//con for of

// for (producto of productos_vendidos_hoy){
//     document.write( ` <div>
//            <h3>Has vendido  ${producto} exitosamente </h3>
//    <button>Ver estado de entrega</button>
//    <hr>
//  </div>`)
//  }




let productos = [
    {
        titulo: 'tv samsung 32"',
        precio: 400000,
        id: 1,
        descripcion: 'Es una tv normal, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 42"',
        precio: 600000,
        id: 2,
        descripcion: 'Es una tv normal pero mas grande, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 50"',
        precio: 800000,
        id: 3,
        descripcion: 'Es una tv normal pero mucho mas grande, no hay mucho que decir.'
    }
]

// PUSH agregar un elemento al final del array
// UNSHIFT agregar un elemento al principio del array

// productos.push(
//     {
//         titulo: 'nuevo producto',
//         precio: 3000,
//         id: 4,
//         descripcion: 'lorem ipsum' 
//     }
// )

//eliminar el ultimo elemento del array y lo retorna
// let producto_eliminado = productos.pop()
// console.log('Has eliminado a ', producto_eliminado)

//eliminar el primer elemento del array y lo retorna
// let producto_eliminado2 = productos.shift()
// console.log('Has eliminado a ', producto_eliminado2)

for (let producto of productos){

document.write(
    `
<div>
    <h3>${producto.titulo}</h3>
    <p>${producto.descripcion}</p>
    <span>Precio: <b>$${producto.precio}</b></span>
    <button>Comprar</button>
    <hr/>
</div>
`
)
}






