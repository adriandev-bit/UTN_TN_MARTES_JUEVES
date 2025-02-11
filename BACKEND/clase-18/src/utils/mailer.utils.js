import nodemailer from 'nodemailer'
import ENVIRONMENT from '../config/enviroment.config.js'

console.log(ENVIRONMENT)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENVIRONMENT.GMAIL_USERNAME,
        pass: ENVIRONMENT.GMAIL_PASSWORD
    }
})

export const sendMail = async ({to, subject, html}) =>{
    const response = await transporter.sendMail({
        to,
        subject,
        html
    })
    console.log(response)
}
