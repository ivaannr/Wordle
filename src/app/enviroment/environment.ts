export const environmentDev = {
    apiUrl: 'http://localhost:8080/',
    usersUrl: 'http://localhost:8080/users',
    webSocketUrl: 'ws://localhost:8080/ws',
    dictionaryUrl: 'https://dictionary.relycapp.com/api/v1/dictionary/lookup?word='
}

export const environmentProd = {
    apiUrl: 'https://wordleapi-qhp7.onrender.com',
    usersUrl: 'https://wordleapi-qhp7.onrender.com',
    webSocketUrl: 'wss://wordleapi-qhp7.onrender.com/ws',
    dictionaryUrl: 'https://dictionary.relycapp.com/api/v1/dictionary/lookup?word='
}