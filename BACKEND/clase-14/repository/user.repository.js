import filesystem from 'fs'

export const createUser = async ({username, email, password}) =>{
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))  //Pasando de .json a un objeto y guardando en variable (array)
    users.push({username, email, password})          // Agregando un objeto al array
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf-8'})   //Pasando del array de objetos a un .json
    return users
}


export const readUsers = async () => {
    try {
        const data = await filesystem.promises.readFile('./database/users.json', { encoding: 'utf-8' });
        const users = JSON.parse(data);  // Convert JSON string to an object (array)
        return users;  // Return the array of users
    } catch (error) {
        console.error('Error reading users:', error);
        return [];  // Return an empty array in case of an error
    }
};


