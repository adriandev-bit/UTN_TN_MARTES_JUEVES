import express from 'express'
import { getAllUsersController, deleteUserByEmailController, updateUsernameByEmailController } from '../controllers/user.controller.js'; // Importar los controladores

const userRouter = express.Router()
userRouter.get('/get', getAllUsersController)
userRouter.delete('/:email', deleteUserByEmailController)
userRouter.put('/:email', updateUsernameByEmailController)

export default userRouter