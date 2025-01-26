import express from 'express';
import { promises as filesystem } from 'fs';  // Usar la versión de promesas de fs

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('<h1>Hola desde express</h1>');
});

app.get('/date', (request, response) => {
    response.send({
        fecha_actual: new Date()
    });
});

const productos = [];

app.post('/productos', async (consulta, respuesta) => {
    console.log(consulta.body);
    const { name, precio, color, marca, es_usado } = consulta.body;
    const new_product = {
        name,
        precio,
        color,
        marca,
        es_usado
    };
    const productos = await guardarProducto(new_product);
    productos.push(new_product);
    respuesta.send({
        message: 'Producto creado satisfactoriamente',
        productos: productos
    });
});

const guardarProducto = async (nuevo_producto) => {
    const productos = JSON.parse(await filesystem.readFile('./database/productos.json', { encoding: 'utf-8' }));
    productos.push(nuevo_producto);
    await filesystem.writeFile('./database/productos.json', JSON.stringify(productos), { encoding: 'utf-8' });
    return productos;
};

app.get('/productos', async (request, response) => {
    // Leer el archivo productos.json de forma asíncrona
    const productos = JSON.parse(await filesystem.readFile('./database/productos.json', { encoding: 'utf-8' }));
    
    // Enviar la respuesta con los productos leídos
    response.send({
        productos: productos
    });
});



app.post('/register', async (request, response) => {
    const { email, password } = request.body;
    const new_user = { email, password };
    const usuarios = await guardarUsuario(new_user);
    response.send({
        message: 'Usuario registrado',
        usuarios: usuarios
    });
});

const guardarUsuario = async (nuevo_usuario) => {
    const usuarios = JSON.parse(await filesystem.readFile('./database/usuarios.json', { encoding: 'utf-8' }));
    usuarios.push(nuevo_usuario);
    await filesystem.writeFile('./database/usuarios.json', JSON.stringify(usuarios), { encoding: 'utf-8' });
    return usuarios;
};

app.listen(PORT, () => {
    console.log({ PORT });
});
