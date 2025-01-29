import express from 'express';
import authRouter from './routes/auth.router.js';
import userRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/products', productsRouter)


// app.get('/test/:limit', (req, res) =>{
//     console.log(req.params)
//     res.send({ok: true})
// })

app.listen(PORT, () => {
    console.log(`El servidor esta ejecutando en http://localhost: ${PORT}`)
})

/* 
Route: /api/products

GET /api/products
Devolver todos los productos
Response: {
    message: "Productos obtenidos",
    ok: true,
    status: 200,
    payload: {
        products: [{productos}]
    }
}

GET /api/products/:product_id
Buscar un producto por id
Response: 
Si se encontro:
{
    message: "Producto con id {id_buscado} encontrado",
    ok: true,
    status:200,
    payload: {
        product: {producto_encontrado}
    }
}

Si no se encontro:
{
    message: "Producto con id {id_buscado} no encontrado",
    ok: true,
    status:404
}
*/