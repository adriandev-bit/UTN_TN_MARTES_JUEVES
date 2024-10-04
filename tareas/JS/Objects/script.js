
//CLASE

let producto= {
    'titulo': 'teclado',
    'precio': 20,
    'id': 1,
    'stock': 10,
    'vendedor': {
            'nombre':'Compumundo',
            'id':1
    }
}

console.log(producto['titulo'])
console.log(producto['vendedor']['nombre'])
console.log(producto.vendedor.id)

let propiedadAMostrar = prompt('Ingrese la clave que quiere mostrar')
alert(producto[propiedadAMostrar])




function crearProducto (titulo, precio, categoria){
    let producto={
        'stock': 0,
        'estado': false
    }
    producto.titulo = titulo;
    producto.precio = precio;
    producto.categoria = categoria;
    return producto;
}

let compra1=crearProducto('bicicleta', 10000, 'vehiculos')
let compra2=crearProducto('monopatin', 20000, 'electricos')
console.log(compra1,compra2)


function mostrarProducto(producto){
let HTML = `
        <div>
            <h3>${producto.titulo}</h3>
            <span><b>Precio:</b> $${producto.precio}</span><br>
            <span><b>Categoría:</b> ${producto.categoria}</span>
        </div>
    `;
document.write(HTML) ;
}
mostrarProducto(compra1)
mostrarProducto(compra2)


