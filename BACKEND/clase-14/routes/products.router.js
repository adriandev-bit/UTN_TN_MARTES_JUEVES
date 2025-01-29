import express from 'express'
import { getproductsController, getProductByIdController, createProductController, deleteProductByIdController  } from '../controllers/products.controller.js'; // Importar los controladores

const productsRouter = express.Router()
productsRouter.get('/', getproductsController)
productsRouter.get('/:product_id', getProductByIdController);
productsRouter.post('/', createProductController);
productsRouter.delete('/:product_id', deleteProductByIdController);


export default productsRouter