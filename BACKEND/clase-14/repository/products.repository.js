import filesystem from 'fs'
import { getAndIncremetCounter } from './counter.repository.js';

export const readProducts = async () => {
        const data = await filesystem.promises.readFile('./database/products.json', { encoding: 'utf-8' });
        const products = JSON.parse(data);  
        return products;  
};


export const getProductById = async (product_id) =>{
    const products = await readProducts()
    const productFind = products.find(p => p.id === Number(product_id));  
    return productFind || null
}

export const createProduct = async(product) =>{
    const products = await readProducts()
    const new_product = {...product, id: await getAndIncremetCounter('products')}
    products.push(new_product)
    
    await saveProducts(products)
    return new_product
}


export const saveProducts = async(products) =>{
    await filesystem.promises.writeFile('./database/products.json', JSON.stringify(products),{encoding: 'utf-8'})
}

export const deleteProductById = async (id) => {
   
        const products = await readProducts()
        const index = products.findIndex(product => product.id === parseInt(id))
        if (index === -1) {
            throw new ServerError (`Producto con id ${id} no encontrado`, 404)
        }
   const deleteProduct = products.splice(index, 1)
   await filesystem.promises.writeFile('./database/products.json', JSON.stringify(products), {encoding: 'utf-8'})
   return deleteProduct[0]
}