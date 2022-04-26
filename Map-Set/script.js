function getAdmins(map) {
    let admins = [];

    for([key, value ] of map) {
        if(value === 'Admin')  {
            admins.push(key)
        }      
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin')
usuarios.set('João', 'Admin')
usuarios.set('Guilherme','User')
usuarios.set('Douglas', 'User')
usuarios.set('Ana', 'Admin')
usuarios.set('Nilson', 'User')

console.log(getAdmins(usuarios))