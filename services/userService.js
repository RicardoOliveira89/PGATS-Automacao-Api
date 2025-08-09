const users = [];

function registerUser(username, password) {
    if (users.find(user => user.username === username)) {
        throw new Error('Usuário já registrado');
    }
    users.push({ username, password, favorites: [] });
}

function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        throw new Error('Credenciais inválidas');
    }
}

function addFavorite(username, favorite) {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    if (!user.favorites.includes(favorite)) {
        user.favorites.push(favorite);
    }
}

function getAllUsers() {
    return users;
}

module.exports = { registerUser, loginUser, addFavorite, getAllUsers };
