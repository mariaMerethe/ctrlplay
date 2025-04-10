// src/lib/igdb.js

// Här skriver vi en funktion som frontend använder för att hämta spel via vår egen proxy-server.

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
  