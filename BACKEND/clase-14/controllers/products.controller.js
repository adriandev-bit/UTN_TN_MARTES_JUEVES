import { readProducts, getProductById } from "../repository/products.repository.js";
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

