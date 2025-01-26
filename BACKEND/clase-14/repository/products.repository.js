import filesystem from 'fs'

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