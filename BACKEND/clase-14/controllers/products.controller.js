
import { readProducts, getProductById, createProduct, deleteProductById } from "../repository/products.repository.js";
import { ServerError } from "../utils/error.util.js";
import { isValidId } from "../utils/validation.util.js";


export const getproductsController = async (req, res) => {
   try {
           const products = await readProducts();   
           res.send({
               ok: true,
               message: 'Products retrieved successfully',
               status: 200,
               payload: {
                products: products
               }
           });
       } catch (error) {
        console.error("Error al obetener los productos", error)
           res.send({
               ok: false,
               message: 'Internal server error',
               status: 500
           });
       }
};


 
export const getProductByIdController = async (req, res) => {
    
    try {
        const { product_id } = req.params; // Obtiene el id desde los parámetros de la URL
    if (!isValidId(product_id)){
        throw new ServerError('Product_id is not a valid Id', 400)
    }

        const product_found = await getProductById(product_id); 
        if (!product_found) { 
            throw new ServerError(`Product_id: ${product_id} is not found`, 404)

        }else{
            return res.send({
                ok: true,
                message: `Product with ID ${product_id} retrieved successfully`,
                status: 200,
                payload: {
                    product_found
                }
            });
        }
    } catch (error) {
        
        if (error.status){
        return res.send({
            ok: false,
            message: error.message,
            status: error.status
        })
    }
        console.log('Error al obtener producto por id',error)
    return res.send({
        ok: false,
        message: 'Internal server error',
        status: 500
    })
}
}


export const createProductController = async (req, res) => {
    try{
        const products = await readProducts()
        const { title, description, price, stock } = req.body
        if(!title || ! description || !price || !stock ) {
            throw new ServerError ("Alguno/s de los campos esta vacio", 400)
        }
    const new_product = {
    title: title,
    description: description,
    price: price,
    stock: stock
}
const product_created = await createProduct(new_product)
return res.send({
    message: 'Producto creado',
    ok: true,
    status: 201,
    payload: {
        product: product_created
    }
})
    }catch(error){
        if (error.status){
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            })
        }
            console.log('Error al obtener producto por id',error)
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}


export const deleteProductByIdController = async (req, res) => {
    const {product_id} = req.params

    try{
        const product = await deleteProductById(product_id)

        res.send(
            {
                ok: true,
                message: "Product deleted",
                status: 200,
                payload:
                {
                    product
                }
            }
        )
    }catch{
        if (error.status){
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            })
        }
            console.log('Error al obtener producto por id',error)
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}


