// Importera paket
import express from 'express';
import fetch from 'node-fetch'; // Används för att hämta data från IGDB
import cors from 'cors';        // Tillåter frontend att kommunicera med denna server (CORS)
import dotenv from 'dotenv';    // Laddar variabler från .env-filen

// Aktivera miljövariabler
dotenv.config();

// Skapa express-appen
const app = express();

// Tillåt CORS (för att frontend ska kunna prata med denna server)
app.use(cors());

// Säkerställ att vi kan läsa inkommande data som text
app.use(express.text()); // <--- viktig ändring, använd .text() istället för .json()

// Port där denna server kör
const PORT = 3001;

// API-rutt som frontend anropar
app.post('/api/games', async (req, res) => {
  const query = req.body; // Den rena IGDB-queryn som en sträng

  try {
    // Skicka vidare till IGDB:s API med rätt headers
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': process.env.VITE_CLIENT_ID,
        'Authorization': `Bearer ${process.env.VITE_ACCESS_TOKEN}`,
        'Content-Type': 'text/plain',
      },
      body: query,
    });

    // Om IGDB inte svarar med OK (200–299), skicka fel
    if (!response.ok) {
      return res.status(response.status).json({ error: 'IGDB fetch failed' });
    }

    // Konvertera svaret till JSON och skicka vidare till frontend
    const data = await response.json();
    res.json(data);
  } catch (error) {
    // Fångar eventuella fel i fetch eller JSON
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Starta servern
app.listen(PORT, () => {
  console.log(`✅ Proxy-server running on http://localhost:${PORT}`);
});
