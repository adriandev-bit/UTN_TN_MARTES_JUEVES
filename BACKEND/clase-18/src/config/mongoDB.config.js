import mongoose from "mongoose";
import ENVIRONMENT from "./enviroment.config.js";



const connectToMongoDB = async () => {
    try{
        const response = await mongoose.connect(ENVIRONMENT.MONGO_DB_URL)
        console.log('Conexion exitosa con MongoDB')
    }
    catch(error){
        console.log('Ocurrio un error al conectarse con MongoDB')
    }

}

connectToMongoDB()

export default mongoose