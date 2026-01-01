
/**
 * Gets the top n users
 * @param {Number} top the number of players to fetch 
 * @returns {Array<Object>} an array with the fetched players
 */
async function fetchTopUsers(top) {
    // const URL = `https://wordleapi-qhp7.onrender.com/players`;
    const URL = `http://localhost:8080/players`;

    try {
        const res = await fetch(URL);
        
        if (!res.ok) { throw new Error(`HTTP error ${res.status}`); }

        const data = await res.json();

        if (!Array.isArray(data)) {
            console.warn("Not an array:", data);
            return [];
        }

        return [...data].sort((a, b) => Number(b.wins) - Number(a.wins)).slice(0, top);
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
}

/**
 * Posts a new user to the database
 * @param {Object} user 
 * @returns The response from the API in json.
 */
async function registerUser(user, pass) {
    //const URL = `https://wordleapi-qhp7.onrender.com/players`;
    const URL = `http://localhost:8080/players`;
    try {

        const res = await fetch(
            URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} || User '${user}' couldn't be registered.`);
        }

        const userRegistered = await res.json();
        console.log("User registered correctly:", userRegistered);
        return userRegistered;
    } catch (exception) {
        console.log("An error ocurred:", exception);
    }
}

export { fetchTopUsers, registerUser }