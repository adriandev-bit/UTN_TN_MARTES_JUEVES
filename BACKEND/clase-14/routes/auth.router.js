// auth.router.js

import express from 'express';
import { registerController } from '../controllers/auth.controller.js';  // Importa el controlador

const authRouter = express.Router();

// Ruta para registro de usuarios
authRouter.post('/register', registerController);


authRouter.post('/login', (req, res) => {
    res.send({
        message: 'Logged successfully!'
    });
});

export default authRouter;  // Exporta el enrutador
