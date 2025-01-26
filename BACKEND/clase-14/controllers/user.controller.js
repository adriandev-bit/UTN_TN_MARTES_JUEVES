import { readUsers } from "../repository/user.repository.js";
import filesystem from "fs";

export const getAllUsersController = async (req, res) => {
    try {
        const users = await readUsers();
        const usersWithoutPassword = users.map(({ password, ...user }) => user); 

        res.status(200).send({
            ok: true,
            message: 'Users retrieved successfully',
            status: 200,
            payload: {
                users: usersWithoutPassword
            }
        });
    } catch (error) {
        res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        });
    }
};

export const deleteUserByEmailController = async (req, res) => {
    const { email } = req.params; // Recibe el email como parámetro de la URL

    try {
        let users = await readUsers(); // Lee los usuarios desde el archivo JSON
        const filteredUsers = users.filter(user => user.email !== email); // Filtra los usuarios para eliminar el que coincida con el email

        if (filteredUsers.length === users.length) {
            return res.status(404).send({
                ok: false,
                message: `User with email ${email} not found`,
                status: 404
            });
        }

        // Escribe el nuevo array de usuarios sin el usuario eliminado
        await filesystem.promises.writeFile('./database/users.json', JSON.stringify(filteredUsers), { encoding: 'utf-8' });

        res.status(200).send({
            ok: true,
            message: `User with email ${email} deleted successfully`,
            status: 200
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: 'Internal server error',
            status: 500
        });
    }
};

export const updateUsernameByEmailController = async (req, res) => {
    const { email } = req.params; // Recibe el email como parámetro de la URL
    const { username } = req.body; // Recibe el nuevo username desde el cuerpo de la solicitud

    try {
        let users = await readUsers(); // Lee los usuarios desde el archivo JSON
        const userIndex = users.findIndex(user => user.email === email); // Encuentra el índice del usuario por email

        if (userIndex === -1) {
            return res.status(404).send({
                ok: false,
                message: `User with email ${email} not found`,
                status: 404
            });
        }

        users[userIndex].username = username; // Actualiza el username del usuario

        // Escribe el nuevo array de usuarios con el username actualizado
        await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), { encoding: 'utf-8' });

        res.status(200).send({
            ok: true,
            message: `Username for user with email ${email} updated successfully`,
            status: 200
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: 'Internal server error',
            status: 500
        });
    }
};
