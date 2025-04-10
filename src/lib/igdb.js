// src/lib/igdb.js

// Här skriver vi en funktion som frontend använder för att hämta spel via vår egen proxy-server.

/** Hämtar en lista med populära spel */
export async function getGames() {
    try {
    // Skicka en POST-förfrågan till vår egen server genom Render
    const response = await fetch('https://ctrlplay-backend.onrender.com/api/games', {
        method: 'POST',
        headers: {
        'Content-Type': 'text/plain', // Viktigt: IGDB:s API kräver text/plain
        },
        // Här skickar vi själva "frågan" till IGDB som ren text (inte som JSON)
        body: 'fields name,cover.url,summary; limit 10; sort popularity desc;'
    });

    // Om servern svarar med ett fel (t.ex. 400 eller 500), kasta ett fel
    if (!response.ok) {
        throw new Error('Failed to fetch games');
    }

    // Om allt gick bra: returnera datan i JSON-format
    return await response.json();
    } catch (error) {
    console.error('getGames error:', error);
    return []; // Returnera tom array om det blev fel, så att .map() i GameList inte kraschar
    }
}

/** Hämtar ett enskilt spel baserat på dess ID */
export async function getGameById(id) {
    try {
    // Skicka en POST-förfrågan till vår proxy med ID som filter
    const response = await fetch('https://ctrlplay-backend.onrender.com/api/games', {
        method: 'POST',
        headers: {
        'Content-Type': 'text/plain', // IGDB kräver detta format
        },
        // Här skickar vi en "where"-fråga för att bara hämta spelet med rätt ID
        body: `fields name,cover.url,summary; where id = ${id};`
    });

    // Om något går fel, kasta ett fel
    if (!response.ok) {
        throw new Error('Failed to fetch game by ID');
    }

    // Returnera spelet (i array-format från IGDB)
    return await response.json();
    } catch (error) {
    console.error('getGameById error:', error);
    return []; // Returnera tom array om något går fel
    }
}