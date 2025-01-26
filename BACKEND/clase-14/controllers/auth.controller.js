// auth.controller.js

import { createUser } from '../repository/user.repository.js';
import { ServerError } from '../utils/error.util.js';

export const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username) {
            throw new ServerError('Username is required', 400)
        }
        if (!email) {
            throw new ServerError('Email is required', 400)
        }

        // Crear usuario utilizando el repositorio
        const users = await createUser({ username, email, password })
        console.log(users);
        return res.send(
            {
                ok: true,
            }
        )

    } catch (error) {
        console.log('Error al register', error)

        // Manejo de errores
        if (error.status) {
           return res.send({
                ok: false,
                message: error.message,
                status: error.status
            });
        } else {
            return res.send({
                ok: false,
                message: 'Internal server error',
                status: 500
            });
        }
    }
}
