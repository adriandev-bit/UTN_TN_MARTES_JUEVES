import express from 'express'
import { getproductsController, getProductByIdController  } from '../controllers/products.controller.js'; // Importar los controladores

const productsRouter = express.Router()
productsRouter.get('/', getproductsController)
productsRouter.get('/:product_id', getProductByIdController);

export default productsRouter