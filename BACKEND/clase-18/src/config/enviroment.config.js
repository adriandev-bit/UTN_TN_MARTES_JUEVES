import dotenv from 'dotenv'

//Carga las variables de entorno en process.env
dotenv.config()

const ENVIRONMENT = {
    PORT: process.env.PORT,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    SECRET_KEY_JWT: process.env.SECRET_KEY_JWT,
    GMAIL_USERNAME: process.env.GMAIL_USERNAME,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    URL_BACKEND: process.env.URL_BACKEND || 'http://localhost:3000',
    URL_FRONTEND: process.env.URL_FRONTEND || 'http://localhost:5000'
}
console.log(ENVIRONMENT)

export default ENVIRONMENT


